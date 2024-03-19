export const MSG_ERROR = {
  BAD_REQUEST_EXCEPTION: "Yêu cầu không hợp lệ",
  UNAUTHORZIED_EXCEPTION: "Unauthorized",
  NOT_FOUND_EXCEPTION: "Không tìm thấy tài nguyên",
  FORBIDDEN_EXCEPTION: "Từ chối truy cập",
  INTERNAL_SERVER_EXCEPTION: "Lỗi server",
  CUSTOM_ERROR_EXCEPTION: "Lỗi tùy chỉnh xảy ra",
  INVALID_EXCEPTION: "Dữ liệu không hợp lệ",
  DATA_NOT_FOUND_EXCEPTION: "Dữ liệu không được tìm thấy",
  DATA_CONFLICT_EXCEPTION: "Xung đột dữ liệu khi xử lý yêu cầu",
  DATA_UNCONNECTION_EXCEPTION: "Lỗi kết nối đến cơ sở dữ liệu",
  DATA_BASE_QUERY_EXCEPTION: "Lỗi truy vấn cơ sở dữ liệu",
  TIME_OUT_EXCEPTION: "Timeout khi thực hiện yêu cầu",
  NOT_ALOW_EXCEPTION: "Phương thức không được phép",
  CONFLICT_EXCEPTION: "Xung đột khi xử lý yêu cầu",
  UNVALIABAL_EXCEPTION: "Dịch vụ không khả dụng",
  PAYMENT_REQUEIR_EXCEPTION:
    "Yêu cầu thanh toán không hợp lệ hoặc số dư không đủ",
  SERVICE_UNVALIABALEXCEPTION: "Dịch vụ không khả dụng",
  GATE_WAY_TIME_OUT_EXCEPTION: "Gateway timeout",
  EMAIL_ERROR: "Email đã tồn tại",
  BAD_GET: "No content",
};
export const MSG_VALIDATION = {
  UNAUTHORZIED_EXCEPTION: "Email hoặc mật khẩu không đúng",
};

export const MSG_SUCCESS = {
  CREATED: (value: string) => `CREATE ${value} SUCCESS`,
  GET: (value: string) => `GET ${value} SUCCESS`,
  UPDATE: (value: string) => `UPDATE ${value} SUCCESS`,
  DELETE: (value: string) => `DELETE ${value} SUCCESS`,
};

export enum HttpStatus {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLYHINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  AMBIGUOUS = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEAPOT = 418,
  MISDIRECTED = 421,
  UNPROCESSABLE_ENTITY = 422,
  FAILED_DEPENDENCY = 424,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}
