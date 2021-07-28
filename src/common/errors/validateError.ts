import { CustomError } from 'ts-custom-error';

class ValidateError extends CustomError {
  public code:number;

  public message:string;

  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

export default ValidateError;
