export interface AlertProps {
  id: string;
  type: 'danger' | 'warning' | 'success' | 'info';
  text: string;
  onClose?: (id: string) => void;
  timeOut?: number;
}
