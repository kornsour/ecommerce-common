import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

// Handles output from express-validator
export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        // For logging purposes
        super('Invalid request parameters');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            // express-validator 7 renamed `param` to `path`, and only
            // field-type errors carry one (alternative/group errors do not).
            return { message: err.msg, field: err.type === 'field' ? err.path : undefined };
        });
    }
}