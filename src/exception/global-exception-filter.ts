// global-exception.filter.ts

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost, data?: any) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception.options) {
      return response.status(status).json({
        statusCode: status,
        message: exception.message || 'Internal server error',
        data: exception.options,
        // timestamp: new Date().toISOString(),
        // path: request.url,
      });
    }
    response.status(status).json({
      statusCode: status,
      message: exception.message || 'Internal server error',
      // timestamp: new Date().toISOString(),
      // path: request.url,
    });
  }
}
