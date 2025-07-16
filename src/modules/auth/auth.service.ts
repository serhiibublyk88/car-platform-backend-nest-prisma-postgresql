import { PrismaService } from '@/database';
import { AuditService } from '@/modules/audit/audit.service';
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
    private readonly audit: AuditService,
  ) {}

  /* ─────────────── LOGIN ─────────────── */
  async login(dto: LoginDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });

    if (!admin || !(await bcrypt.compare(dto.password, admin.password))) {
      throw new UnauthorizedException('Ungültige Zugangsdaten');
    }

    await this.audit.log(admin.id, AuditAction.Login);

    return this.generateToken(admin.id, admin.email);
  }

  /* ─────────────── LOGOUT ─────────────── */
  async logout(adminId: string) {
    await this.audit.log(adminId, AuditAction.Logout);
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
