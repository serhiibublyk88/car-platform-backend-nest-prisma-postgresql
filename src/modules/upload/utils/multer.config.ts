import { randomUUID } from 'crypto';
import * as fs from 'fs';
import { diskStorage, type Options } from 'multer';
import { extname } from 'path';
import * as sharp from 'sharp';

const UPLOAD_DIR = 'public/uploads';
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

export const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp'] as const;

export const multerOptions: Options = {
  storage: diskStorage({
    destination: (_, __, cb) => cb(null, UPLOAD_DIR),
    filename: (_, file, cb) =>
      cb(null, `${randomUUID()}${extname(file.originalname)}`),
  }),

  limits: { fileSize: 5 * 1024 * 1024 },

  fileFilter: (_, file, cb) => {
    if (ALLOWED_MIME.includes(file.mimetype as (typeof ALLOWED_MIME)[number]))
      cb(null, true);
    else cb(new Error('Nur Bilder (jpeg, png, webp) sind erlaubt'));
  },
};

export async function processImage(filePath: string): Promise<void> {
  const tmp = `${filePath}.tmp`;

  await sharp(filePath)
    .resize(1920, 1280, { fit: 'inside' })
    .jpeg({ quality: 80 })
    .toFile(tmp);

  await fs.promises.rename(tmp, filePath);
}
