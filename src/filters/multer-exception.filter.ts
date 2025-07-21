import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { MulterError } from 'multer';

@Catch(MulterError)
export class MulterExceptionFilter implements ExceptionFilter {
  catch(err: MulterError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const message =
      err.code === 'LIMIT_FILE_SIZE'
        ? 'Maximale Dateigröße 5 MB überschritten'
        : err.message;

    res.status(400).json({
      statusCode: 400,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
    });
  }
}
