import { Public } from '@/modules/auth';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarService } from '../car.service';
import { GetCarsQueryDto } from '../dto';

@Controller('cars')
export class PublicCarController {
  constructor(private readonly carService: CarService) {}

  @Public()
  @Get()
  getAllVisible(@Query() dto: GetCarsQueryDto) {
    return this.carService.getAllVisible(dto);
  }

  @Public()
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.carService.getById(id);
  }
}
