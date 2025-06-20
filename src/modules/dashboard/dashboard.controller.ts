import { Roles } from '@/modules/auth/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from '@/modules/auth/guards';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardResponseDto } from './dto/dashboard-response.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin/dashboard')
export class DashboardController {
  constructor(private readonly service: DashboardService) {}

  @Get()
  getDashboard(): Promise<DashboardResponseDto> {
    return this.service.get();
  }
}
