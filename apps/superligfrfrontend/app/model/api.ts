export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface ApiError {
  message: string;
  rule: string;
  field: string;
}
