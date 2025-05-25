import { Public } from '@/modules/auth';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { Inquiry } from '@prisma/client';
import { CreateInquiryDto } from '../dto';
import { InquiryService } from '../inquiry.service';

@Controller('cars')
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Public()
  @Post(':id/inquiry')
  create(
    @Param('id') carId: string,
    @Body() dto: CreateInquiryDto,
  ): Promise<Inquiry> {
    return this.inquiryService.createPublicInquiry(carId, dto);
  }
}
