import { Module } from '@nestjs/common';
import { PrismaModule } from '@/database';
import { AuditService } from './audit.service';

@Module({
  imports: [PrismaModule],
  providers: [AuditService],
  exports: [AuditService],
})
export class AuditModule {}
