import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database';
import { AuditAction } from '@prisma/client';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(adminId: string, action: AuditAction): Promise<void> {
    await this.prisma.auditLog.create({
      data: {
        adminId,
        action,
      },
    });
  }
}
