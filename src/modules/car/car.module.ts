import { PrismaModule } from '@/database';
import { Module } from '@nestjs/common';

import { CarRepository } from './car.repository';
import { CarService } from './car.service';

import { AdminCarController, PublicCarController } from './controllers';

@Module({
  imports: [PrismaModule],

  controllers: [PublicCarController, AdminCarController],

  providers: [CarService, CarRepository],

  exports: [CarService],
})
export class CarModule {}
