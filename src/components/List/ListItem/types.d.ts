import { ReactNode, RefAttributes } from 'react';

export interface ListItemProps {
  title?: string | ReactNode;
  subTitle?: string | ReactNod;
  description?: string | ReactNod;
  selected?: boolean;
  draggable?: boolean;
  colorMark?: string;
  style?: any;
  innerRef?: RefAttributes;
  className?: string;
  onSelect?: (id: string) => void
}
