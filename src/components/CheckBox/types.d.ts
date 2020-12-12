export interface CheckBoxProps {
  id: string;
  defaultChecked?: boolean;
  label?: string;
  onCheck: (id: string, value: boolean) => void;
  className?: string;
}
