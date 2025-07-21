import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UploadedFileDto } from './dto/uploaded-file.dto';
import { UploadService } from './upload.service';

@Controller('upload')
@UseGuards(RolesGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @Roles('ADMIN')
  @UseInterceptors(FilesInterceptor('files', 20))
  async upload(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<UploadedFileDto[]> {
    return this.uploadService.uploadFiles(files);
  }

  @Delete(':filename')
  @Roles('ADMIN')
  async remove(@Param('filename') filename: string): Promise<{ ok: true }> {
    await this.uploadService.deleteFile(filename);
    return { ok: true };
  }
}
