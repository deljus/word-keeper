export interface SeachBarProps {
  search: string;
  selectedGroups: string[];
  onSearch: (string) => void;
  onChangeGroups: (id: string, label?: string, value: boolean) => void;
}
