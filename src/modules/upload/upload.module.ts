import { Module } from '@nestjs/common';
import type { MulterModuleOptions } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';

import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { multerOptions } from './utils/multer.config';

@Module({
  imports: [MulterModule.register(multerOptions as MulterModuleOptions)],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService],
})
export class UploadModule {}
