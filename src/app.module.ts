import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { PrismaModule } from '@/database';
import {
  AuthModule,
  CarModule,
  DashboardModule,
  InquiryModule,
} from '@/modules';

import { AppController } from './app.controller';
import { AppGuard } from './app.guard';
import { AppService } from './app.service';

import { PrismaExceptionFilter } from '@/filters';
import { JwtAuthGuard, RolesGuard } from '@/modules/auth';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60, limit: 5 }],
    }),
    PrismaModule,
    AuthModule,
    CarModule,
    InquiryModule,
    DashboardModule,
  ],

  controllers: [AppController],

  providers: [
    AppService,
    ThrottlerGuard,
    RolesGuard,
    JwtAuthGuard,
    { provide: APP_GUARD, useClass: AppGuard },
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
  ],
})
export class AppModule {}
