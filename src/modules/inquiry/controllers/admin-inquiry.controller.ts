import { CurrentUser, JwtAuthGuard, Roles } from '@/modules/auth';
import { JwtPayload } from '@/modules/auth/strategies/jwt.strategy';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FilterInquiryDto } from '../dto';
import { InquiryService } from '../inquiry.service';

@UseGuards(JwtAuthGuard)
@Roles('ADMIN')
@Controller('admin/inquiries')
export class AdminInquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Get()
  getAll(@Query() filter: FilterInquiryDto) {
    return this.inquiryService.getAll(filter);
  }

  @Patch(':id/read')
  markAsRead(@Param('id') id: string, @CurrentUser() user: JwtPayload) {
    return this.inquiryService.markAsRead(id, user.id);
  }

  @Patch(':id/handle')
  markAsHandled(@Param('id') id: string, @CurrentUser() user: JwtPayload) {
    return this.inquiryService.markAsHandled(id, user.id);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @CurrentUser() user: JwtPayload) {
    return this.inquiryService.delete(id, user.id);
  }
}
