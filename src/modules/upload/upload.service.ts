import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { fileTypeFromFile } from 'file-type';

import { processImage, ALLOWED_MIME } from './utils/multer.config';
import { UploadedFileDto } from './dto/uploaded-file.dto';

const ABS_DIR = 'public/uploads';
const URL_PREFIX = '/uploads/';

@Injectable()
export class UploadService {
  private readonly logger = new Logger(UploadService.name);

  /** загрузка, MIME‑проверка и параллельный ресайз */
  async uploadFiles(files: Express.Multer.File[]): Promise<UploadedFileDto[]> {
    return Promise.all(
      files.map(async (file) => {
        /* фактический MIME по содержимому (anti‑spoof) */
        const real = await fileTypeFromFile(file.path);

        if (
          !real ||
          !ALLOWED_MIME.includes(real.mime as (typeof ALLOWED_MIME)[number])
        ) {
          await fs.unlink(file.path);
          throw new BadRequestException('Ungültiger Dateityp');
        }

        await processImage(file.path);

        return {
          url: `${URL_PREFIX}${file.filename}`,
          filename: file.filename,
          originalName: file.originalname,
        };
      }),
    );
  }

  async deleteFile(filename: string): Promise<void> {
    const full = join(ABS_DIR, filename);
    try {
      await fs.unlink(full);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
        throw new NotFoundException(`Datei ${filename} nicht gefunden`);
      }
      throw err;
    }
  }

  /** удаляем пачкой + логируем уже‑отсутствующие файлы */
  async deleteFiles(filenames: string[]): Promise<void> {
    await Promise.all(
      filenames.map(async (f) => {
        try {
          await fs.unlink(join(ABS_DIR, f));
        } catch (err) {
          if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err;
          this.logger.warn(`File ${f} already missing`);
        }
      }),
    );
  }
}
