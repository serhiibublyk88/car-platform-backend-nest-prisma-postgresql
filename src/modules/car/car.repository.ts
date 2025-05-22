import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {
  Condition,
  FuelType,
  Prisma,
  Transmission,
  VehicleType,
} from '@prisma/client';
import { CreateCarDto, GetCarsQueryDto, UpdateCarDto } from './dto';
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

  async getAllVisible(dto: GetCarsQueryDto) {
    const {
      search,
      page = 1,
      limit = 10,
      priceFrom,
      priceTo,
      mileageFrom,
      mileageTo,
      powerFrom,
      powerTo,
      engineCapacityFrom,
      engineCapacityTo,
      yearFrom,
      yearTo,
      ...filters
    } = dto;

    const where: Prisma.CarWhereInput = {
      visible: true,
      sold: false,
    };

    // ✅ Строгие строковые и числовые фильтры
    if (filters.make) {
      where.make = { equals: filters.make };
    }
    if (filters.model) {
      where.model = { equals: filters.model };
    }
    if (filters.accidentFree !== undefined) {
      where.accidentFree = { equals: filters.accidentFree };
    }
    if (filters.seats !== undefined) {
      where.seats = { equals: filters.seats };
    }
    if (filters.doors !== undefined) {
      where.doors = { equals: filters.doors };
    }

    // ✅ Enum-фильтры через безопасную проверку
    if (
      filters.fuelType &&
      Object.values(FuelType).includes(filters.fuelType as FuelType)
    ) {
      where.fuelType = { equals: filters.fuelType as FuelType };
    }

    if (
      filters.transmission &&
      Object.values(Transmission).includes(filters.transmission as Transmission)
    ) {
      where.transmission = { equals: filters.transmission as Transmission };
    }

    if (
      filters.condition &&
      Object.values(Condition).includes(filters.condition as Condition)
    ) {
      where.condition = { equals: filters.condition as Condition };
    }

    if (
      filters.vehicleType &&
      Object.values(VehicleType).includes(filters.vehicleType as VehicleType)
    ) {
      where.vehicleType = { equals: filters.vehicleType as VehicleType };
    }

    // 🔍 Поиск по строкам
    if (search) {
      where.OR = [
        { make: { contains: search, mode: 'insensitive' } },
        { model: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    // 🔢 Диапазоны
    if (priceFrom || priceTo) {
      where.price = {};
      if (priceFrom !== undefined) where.price.gte = priceFrom;
      if (priceTo !== undefined) where.price.lte = priceTo;
    }

    if (mileageFrom || mileageTo) {
      where.mileage = {};
      if (mileageFrom !== undefined) where.mileage.gte = mileageFrom;
      if (mileageTo !== undefined) where.mileage.lte = mileageTo;
    }

    if (powerFrom || powerTo) {
      where.power = {};
      if (powerFrom !== undefined) where.power.gte = powerFrom;
      if (powerTo !== undefined) where.power.lte = powerTo;
    }

    if (engineCapacityFrom || engineCapacityTo) {
      where.engineCapacity = {};
      if (engineCapacityFrom !== undefined)
        where.engineCapacity.gte = engineCapacityFrom;
      if (engineCapacityTo !== undefined)
        where.engineCapacity.lte = engineCapacityTo;
    }

    if (yearFrom || yearTo) {
      where.firstRegistration = {};
      if (yearFrom !== undefined)
        where.firstRegistration.gte = String(yearFrom);
      if (yearTo !== undefined) where.firstRegistration.lte = String(yearTo);
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.car.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { images: true },
      }),
      this.prisma.car.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      limit,
    };
  }
}
