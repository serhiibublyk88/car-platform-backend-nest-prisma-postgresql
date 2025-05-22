import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';

import { CarRepository } from './car.repository';
import { CarService } from './car.service';

import { AdminCarController } from './controllers/admin-car.controller';
import { PublicCarController } from './controllers/public-car.controller';

@Module({
  imports: [PrismaModule],

  controllers: [PublicCarController, AdminCarController],

  providers: [CarService, CarRepository],

  exports: [CarService],
})
export class CarModule {}
