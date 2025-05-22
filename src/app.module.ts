import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';

import { AuthModule } from '@/modules/auth/auth.module';
import { CarModule } from '@/modules/car/car.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/modules/auth/guards/roles.guard';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AppGuard } from './app.guard';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 5,
        },
      ],
    }),
    PrismaModule,
    AuthModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ThrottlerGuard,
    RolesGuard,
    JwtAuthGuard,
    {
      provide: APP_GUARD,
      useClass: AppGuard,
    },
  ],
})
export class AppModule {}
