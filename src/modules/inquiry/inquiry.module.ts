import { Module } from '@nestjs/common';
import { PrismaModule } from '@/database';
import { AuditModule } from '@/modules/audit';
import { InquiryService } from './inquiry.service';
import { InquiryController, AdminInquiryController } from './controllers';

@Module({
  imports: [PrismaModule, AuditModule],
  controllers: [InquiryController, AdminInquiryController],
  providers: [InquiryService],
})
export class InquiryModule {}
