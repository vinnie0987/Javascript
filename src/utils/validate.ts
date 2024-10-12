import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

// Define the middleware with an explicit return type of void
export const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
       res.status(400).send({ error: error.details[0].message });
    }
    next();
  };
};
