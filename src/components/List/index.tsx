import React, { FC, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { ListProps } from './types';

export { default as ListItem } from './ListItem';
export { default as DraggableList } from './DraggableList';

const List: FC<ListProps> = ({ children, items, renderItems }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [items, children]);
  return (
    <>
      <div className="list-container">
        {children || (renderItems && items && items.map(renderItems))}
      </div>
      <ReactTooltip id="star-tooltip" />
    </>
  );
};

export default List;
