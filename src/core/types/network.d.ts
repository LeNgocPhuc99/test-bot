export type HttpStatus = "IDLE" | "REQUESTING" | "SUCCESS" | "ERROR" | "CANCELLED";

export interface RequestStatus {
  status: HttpStatus;
  message?: string;
}
