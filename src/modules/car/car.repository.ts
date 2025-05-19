import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { mapCreateCarDtoToPrisma, mapUpdateCarDtoToPrisma } from './car.mapper';

@Injectable()
export class CarRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCarDto, adminId: string) {
    const data = mapCreateCarDtoToPrisma(dto, adminId);
    return this.prisma.car.create({ data, include: { images: true } });
  }

  async update(id: string, dto: UpdateCarDto) {
    const data = mapUpdateCarDtoToPrisma(dto);
    return this.prisma.car.update({
      where: { id },
      data,
      include: { images: true },
    });
  }

  async findAll() {
    return this.prisma.car.findMany({
      orderBy: { createdAt: 'desc' },
      include: { images: true },
    });
  }

  async findById(id: string) {
    return this.prisma.car.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  async delete(id: string) {
    return this.prisma.car.delete({ where: { id } });
  }

  async deleteMany(ids: string[]) {
    return this.prisma.car.deleteMany({
      where: { id: { in: ids } },
    });
  }

  async toggleVisibility(id: string, visible: boolean) {
    return this.prisma.car.update({
      where: { id },
      data: { visible },
    });
  }

  async getAllVisible() {
    return this.prisma.car.findMany({
      where: {
        visible: true,
        sold: false,
      },
      orderBy: { createdAt: 'desc' },
      include: { images: true },
    });
  }
}
