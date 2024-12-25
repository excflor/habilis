import { Response } from 'express';
import { formatResponse } from './response.util';
import { NotFoundError, BadRequestError } from './custom-error.util';
import { ZodError } from 'zod';

export class ErrorHandler {
  static handle(res: Response, error: unknown): void {
    if (error instanceof ZodError) {
      const errors = error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      const response = formatResponse(400, 'validation error', errors);
      res.status(400).json(response);
    } else if (error instanceof NotFoundError) {
      const response = formatResponse(404, error.message, null);
      res.status(404).json(response);
    } else if (error instanceof BadRequestError) {
      const response = formatResponse(400, error.message, null);
      res.status(400).json(response);
    } else if (error instanceof Error) {
      const response = formatResponse(500, error.message, null);
      res.status(500).json(response);
    } else {
      const response = formatResponse(500, 'An unexpected error occurred', null);
      res.status(500).json(response);
    }
  }
}
