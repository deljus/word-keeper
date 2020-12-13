import React, { FC, useEffect } from 'react';
import { ListProps } from './types';

export { default as ListItem } from './ListItem';
export { default as DraggableList } from './DraggableList';

const List: FC<ListProps> = ({ children, items, renderItems }) => (
  <div className="list-container">
    {children || (renderItems && items && items.map(renderItems))}
  </div>
);

export default List;
