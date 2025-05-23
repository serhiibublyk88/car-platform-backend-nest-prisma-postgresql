import { PrismaService } from '@/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AuditAction } from '@prisma/client';
import { CarRepository } from './car.repository';
import { CreateCarDto, GetCarsQueryDto, UpdateCarDto } from './dto';

@Injectable()
export class CarService {
  constructor(
    private readonly carRepository: CarRepository,
    private readonly prisma: PrismaService,
  ) {}

  async create(dto: CreateCarDto, adminId: string) {
    const car = await this.carRepository.create(dto, adminId);

    await this.prisma.auditLog.create({
      data: {
        action: AuditAction.CreateCar,
        adminId,
      },
    });

    return car;
  }

  async update(id: string, dto: UpdateCarDto) {
    const car = await this.carRepository.findById(id);
    if (!car) throw new NotFoundException('Auto wurde nicht gefunden');

    const updatedCar = await this.carRepository.update(id, dto);

    await this.prisma.auditLog.create({
      data: {
        action: AuditAction.UpdateCar,
        adminId: car.adminId!, // безопасно, так как машина существует
      },
    });

    return updatedCar;
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

    await this.carRepository.delete(id);

    await this.prisma.auditLog.create({
      data: {
        action: AuditAction.DeleteCar,
        adminId: car.adminId!,
      },
    });

    return { success: true };
  }

  async toggleVisibility(id: string, visible: boolean) {
    return this.carRepository.toggleVisibility(id, visible);
  }

  async getAllVisible(dto: GetCarsQueryDto) {
    return this.carRepository.getAllVisible(dto);
  }
}
