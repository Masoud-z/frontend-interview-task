export type ToastType = "success" | "error" | "warning";
export interface ToastDto {
  message: string;
  type: ToastType;
  id: number;
}
