import { ReactElement } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

type ItemType = any;
type ItemsType = Array<ItemType>;
export type RenderItemsType = (
  arg: ItemType,
  arg2: DraggableProvided
) => ReactElement;

export interface DragListProps {
  items?: ItemsType;
  onMoveItems?: (fromId: number, toId: number) => any;
  renderItems: RenderItemsType;
}
