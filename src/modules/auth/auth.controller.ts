import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Roles } from './decorators';
import { CurrentUser, JwtPayload } from './decorators';
import { LoginDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards';

const ONE_HOUR_MS = 60 * 60 * 1000;

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /* ---------- LOGIN ---------- */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Throttle({ limit: 5, ttl: 60 })
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.auth.login(dto);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: ONE_HOUR_MS,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    return { ok: true };
  }

  /* ---------- WHO AM I ---------- */
  @UseGuards(JwtAuthGuard)
  @Get('me')
  whoAmI() {
    return { ok: true };
  }

  /* ---------- LOGOUT ---------- */
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async logout(
    @CurrentUser() user: JwtPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.auth.logout(user.id);
    res.clearCookie('accessToken', { path: '/' });
    return { ok: true };
  }

  /* ---------- ADMIN CHECK ---------- */
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @Get('admin-check')
  checkAdmin() {
    return { message: 'You are ADMIN' };
  }
}
