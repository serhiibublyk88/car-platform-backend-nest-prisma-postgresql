import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() dto: CreateCarDto) {
    const adminId = 'admin-id-placeholder';
    return this.carService.create(dto, adminId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCarDto) {
    return this.carService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carService.delete(id);
  }

  @Get('public')
  getAllVisible() {
    return this.carService.getAllVisible();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.carService.getById(id);
  }

  @Get()
  getAll() {
    return this.carService.getAll();
  }

  @Patch(':id/visibility')
  toggleVisibility(@Param('id') id: string, @Query('visible') visible: string) {
    return this.carService.toggleVisibility(id, visible === 'true');
  }
}
