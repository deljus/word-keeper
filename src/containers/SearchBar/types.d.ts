export interface SeachBarProps {
  search: string;
  selectedGroups: string[];
  onSearch: (string) => void;
  onChangeGroups: (arg: string[]) => void;
}
