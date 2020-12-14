import React, { FC, ReactElement } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { DragListProps } from './types';

const DraggableList: FC<DragListProps> = ({
  items,
  onMoveItems,
  renderItems,
}) => {
  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    if (!destination || !onMoveItems || !items) return;

    onMoveItems(items[source.index], items[destination.index]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided: DroppableProvided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="draggable-list"
          >
            {items &&
              items.length &&
              items.map((item: any, index: number) => (
                <Draggable
                  draggableId={index.toString()}
                  key={index.toString()}
                  index={index}
                >
                  {(prov: DraggableProvided): ReactElement =>
                    renderItems(item, prov)
                  }
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
