// location-exception.filter.ts

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export class LocationException implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = 'Error: ' + error.message;

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
      // timestamp: new Date().toISOString(),
      // path: request.url,
    });
  }
}
