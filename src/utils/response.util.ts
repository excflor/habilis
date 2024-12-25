export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export function formatResponse<T>(code: number, message: string, data: T): ApiResponse<T> {
  return { code, message, data };
}
