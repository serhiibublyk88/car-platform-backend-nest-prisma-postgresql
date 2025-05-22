import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Roles } from './decorators';
import { LoginDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards';

const ONE_HOUR_MS = 60 * 60 * 1000;

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  @HttpCode(200)
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

  @UseGuards(JwtAuthGuard)
  @Get('me')
  whoAmI() {
    return { ok: true };
  }

  @Post('logout')
  @HttpCode(200)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('accessToken', { path: '/' });
    return { ok: true };
  }

  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @Get('admin-check')
  checkAdmin() {
    return { message: 'You are ADMIN' };
  }
}
