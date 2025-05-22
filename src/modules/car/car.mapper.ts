import { Prisma } from '../../../generated/prisma';
import { CreateCarDto, UpdateCarDto } from './dto';

export const mapCreateCarDtoToPrisma = (
  dto: CreateCarDto,
  adminId: string,
): Prisma.CarCreateInput => {
  return {
    make: dto.make.trim(),
    model: dto.model.trim(),
    vehicleType: dto.vehicleType,
    seats: dto.seats,
    doors: dto.doors,
    condition: dto.condition,
    price: dto.price,
    firstRegistration: dto.firstRegistration,
    mileage: dto.mileage,
    fuelType: dto.fuelType,
    power: dto.power,
    engineCapacity: dto.engineCapacity,
    drivetrain: dto.drivetrain,
    transmission: dto.transmission,
    vin: dto.vin.trim(),
    accidentFree: dto.accidentFree,
    description: dto.description.trim(),
    sold: false,
    visible: true,
    admin: {
      connect: { id: adminId },
    },
    images: {
      create: dto.images.map((url) => ({ url })),
    },
  };
};

export const mapUpdateCarDtoToPrisma = (
  dto: UpdateCarDto,
): Prisma.CarUpdateInput => {
  const updateData: Prisma.CarUpdateInput = {};

  if (dto.make) updateData.make = { set: dto.make.trim() };
  if (dto.model) updateData.model = { set: dto.model.trim() };
  if (dto.vehicleType) updateData.vehicleType = { set: dto.vehicleType };
  if (dto.seats !== undefined) updateData.seats = { set: dto.seats };
  if (dto.doors !== undefined) updateData.doors = { set: dto.doors };
  if (dto.condition) updateData.condition = { set: dto.condition };
  if (dto.price !== undefined) updateData.price = { set: dto.price };
  if (dto.firstRegistration) {
    updateData.firstRegistration = { set: dto.firstRegistration };
  }
  if (dto.mileage !== undefined) updateData.mileage = { set: dto.mileage };
  if (dto.fuelType) updateData.fuelType = { set: dto.fuelType };
  if (dto.power !== undefined) updateData.power = { set: dto.power };
  if (dto.engineCapacity !== undefined) {
    updateData.engineCapacity = { set: dto.engineCapacity };
  }
  if (dto.drivetrain) updateData.drivetrain = { set: dto.drivetrain };
  if (dto.transmission) updateData.transmission = { set: dto.transmission };
  if (dto.vin) updateData.vin = { set: dto.vin.trim() };
  if (dto.accidentFree !== undefined) {
    updateData.accidentFree = { set: dto.accidentFree };
  }
  if (dto.description) {
    updateData.description = { set: dto.description.trim() };
  }
  if (dto.sold !== undefined) updateData.sold = { set: dto.sold };
  if (dto.visible !== undefined) updateData.visible = { set: dto.visible };

  if (dto.images) {
    updateData.images = {
      deleteMany: {},
      create: dto.images.map((url) => ({ url })),
    };
  }

  return updateData;
};
