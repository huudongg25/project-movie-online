export class BadRequestException extends Error {
  name = "BadRequestException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 400, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class AuthencationException extends Error {
  name = "AuthencationException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 401, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class UnauthorizedException extends Error {
  name = "UnauthorizedException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 401, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class ServerException extends Error {
  name = "ServerException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 500, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class ValidationException extends Error {
  name = "ValidationException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 400, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class PaymentRequiredException extends Error {
  name = "PaymentRequiredException";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 402, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class DatabaseConnectionError extends Error {
  name = "DatabaseConnectionError";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 500, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class DuplicateEntryError extends Error {
  name = "DuplicateEntryError";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 409, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}

export class InvalidQueryError extends Error {
  name = "InvalidQueryError";
  statusCode: number;
  field: any;
  constructor(message: string, statusCode = 400, field = null) {
    super(message);
    this.statusCode = statusCode;
    this.field = field;
  }
}
