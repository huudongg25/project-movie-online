export const MSG_CONTROLLER_ERROR = {
  BadRequestException: "Yêu cầu không hợp lệ",
  UnauthorizedException: "Unauthorized",
  NotFoundException: "Không tìm thấy tài nguyên",
  ForbiddenException: "Từ chối truy cập",
  InternalServerException: "Lỗi server",
  CustomErrorException: "Lỗi tùy chỉnh xảy ra",
};
export const MSG_SERVICE_ERROR = {
  TimeoutException: "Timeout khi thực hiện yêu cầu",
  NotAllowedException: "Phương thức không được phép",
  ConflictException: "Xung đột khi xử lý yêu cầu",
  UnavailableException: "Dịch vụ không khả dụng",
  PaymentRequiredException: "Yêu cầu thanh toán",
  ServiceUnavailableException: "Dịch vụ không khả dụng",
  GatewayTimeoutException: "Gateway timeout",
};
export const MSG_MODEL_ERROR = {
  InvalidDataException: "Dữ liệu không hợp lệ",
  DataNotFoundException: "Dữ liệu không được tìm thấy",
  DataConflictException: "Xung đột dữ liệu khi xử lý yêu cầu",
  DatabaseConnectionException: "Lỗi kết nối đến cơ sở dữ liệu",
  DatabaseQueryException: "Lỗi truy vấn cơ sở dữ liệu",
};
