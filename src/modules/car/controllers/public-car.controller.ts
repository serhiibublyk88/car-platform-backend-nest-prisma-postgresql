import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from '../car.service';

@Controller('cars')
export class PublicCarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getAllVisible() {
    return this.carService.getAllVisible(); // пока без query-фильтров
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.carService.getById(id);
  }
}
