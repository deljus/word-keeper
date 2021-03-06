import { ReactNode, RefAttributes } from 'react';

export interface ListItemProps {
  id: string;
  title?: string | ReactNode;
  subTitle?: string | ReactNod;
  description?: string | ReactNod;
  selected?: boolean;
  drag?: boolean;
  colorMark?: string;
  style?: any;
  innerRef?: RefAttributes;
  className?: string;
  onSelect?: (id: string, selected: boolean) => void;
}
