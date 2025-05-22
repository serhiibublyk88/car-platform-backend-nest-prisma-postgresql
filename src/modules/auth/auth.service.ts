import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin || !(await bcrypt.compare(dto.password, admin.password))) {
      throw new UnauthorizedException('Ungültige Zugangsdaten');
    }

    return this.generateToken(admin.id, admin.email);
  }

  private generateToken(id: string, email: string) {
    const payload = {
      id,
      email,
      role: 'ADMIN' as const,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: process.env.ACCESS_EXP ?? '1h',
      }),
    };
  }
}
