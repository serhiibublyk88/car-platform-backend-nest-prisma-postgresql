import { PrismaModule } from '@/database';
import { AuditModule } from '@/modules/audit/audit.module';
import { Module } from '@nestjs/common';

import { CarRepository } from './car.repository';
import { CarService } from './car.service';
import { AdminCarController, PublicCarController } from './controllers';

@Module({
  imports: [PrismaModule, AuditModule],
  controllers: [PublicCarController, AdminCarController],
  providers: [CarService, CarRepository],
  exports: [CarService],
})
export class CarModule {}
