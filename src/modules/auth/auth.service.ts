import { PrismaService } from '@/database';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuditAction } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  /* ─────────────── LOGIN ─────────────── */
  async login(dto: LoginDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin || !(await bcrypt.compare(dto.password, admin.password))) {
      throw new UnauthorizedException('Ungültige Zugangsdaten');
    }

    await this.prisma.auditLog.create({
      data: {
        action: AuditAction.Login,
        adminId: admin.id,
      },
    });

    return this.generateToken(admin.id, admin.email);
  }

  /* ─────────────── LOGOUT ─────────────── */
  async logout(adminId: string) {
    await this.prisma.auditLog.create({
      data: {
        action: AuditAction.Logout,
        adminId,
      },
    });

    return { message: 'Erfolgreich abgemeldet' };
  }

  /* ─────────────── JWT ─────────────── */
  private generateToken(id: string, email: string) {
    const payload = { id, email, role: 'ADMIN' as const };

    return {
      accessToken: this.jwt.sign(payload, {
        expiresIn: process.env.ACCESS_EXP ?? '1h',
      }),
    };
  }
}
