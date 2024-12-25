import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../utils/error.util';

export const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  ErrorHandler.handle(res, error);
};
