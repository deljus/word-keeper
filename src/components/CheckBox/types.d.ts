export interface CheckBoxProps {
  id: string;
  defaultChecked?: boolean;
  label: string;
  onCheck: (id: string, label: string, value: boolean) => void;
  className?: string;
}
