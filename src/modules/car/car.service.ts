import { Injectable, NotFoundException } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { CreateCarDto, GetCarsQueryDto, UpdateCarDto } from './dto';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async create(dto: CreateCarDto, adminId: string) {
    return this.carRepository.create(dto, adminId);
  }

  async update(id: string, dto: UpdateCarDto) {
    const car = await this.carRepository.findById(id);
    if (!car) throw new NotFoundException('Auto wurde nicht gefunden');
    return this.carRepository.update(id, dto);
  }

  async getAll() {
    return this.carRepository.findAll();
  }

  async getById(id: string) {
    const car = await this.carRepository.findById(id);
    if (!car) throw new NotFoundException('Auto wurde nicht gefunden');
    return car;
  }

  async delete(id: string) {
    const car = await this.carRepository.findById(id);
    if (!car) throw new NotFoundException('Auto wurde nicht gefunden');
    return this.carRepository.delete(id);
  }

  async toggleVisibility(id: string, visible: boolean) {
    return this.carRepository.toggleVisibility(id, visible);
  }

  async getAllVisible(dto: GetCarsQueryDto) {
    return this.carRepository.getAllVisible(dto);
  }
}
