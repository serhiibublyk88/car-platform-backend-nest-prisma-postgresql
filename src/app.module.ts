import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';

import { PrismaModule } from '@/database';
import { AuthModule, CarModule, InquiryModule } from '@/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JwtAuthGuard, RolesGuard } from '@/modules/auth';

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
    InquiryModule,
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
