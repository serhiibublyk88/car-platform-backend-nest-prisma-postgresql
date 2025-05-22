import { CurrentUser, JwtAuthGuard, JwtPayload } from '@/modules/auth';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CarService } from '../car.service';
import { CreateCarDto, UpdateCarDto } from '../dto';

@UseGuards(JwtAuthGuard)
@Controller('admin/cars')
export class AdminCarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@CurrentUser() admin: JwtPayload, @Body() dto: CreateCarDto) {
    return this.carService.create(dto, admin.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCarDto) {
    return this.carService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carService.delete(id);
  }

  @Get()
  getAll() {
    return this.carService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.carService.getById(id);
  }

  @Patch(':id/visibility')
  toggleVisibility(@Param('id') id: string, @Body('visible') visible: boolean) {
    return this.carService.toggleVisibility(id, visible);
  }
}
