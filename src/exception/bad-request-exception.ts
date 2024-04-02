import { HttpException, HttpStatus } from "@nestjs/common";

export class BadRequestException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, HttpStatus.BAD_REQUEST, data);
  }
}
