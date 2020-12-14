import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import Icon from '../../Icon';
import { ListItemProps } from './types';

import styles from './listitem.module.css';

const ListItem: FC<ListItemProps> = ({
  id,
  title,
  subTitle,
  drag,
  selected,
  onSelect,
  innerRef,
  description,
  ...rest
}) => {
  const [open, toggle] = useState(false);
  const handleDescriptionClick = useCallback(() => {
    toggle(!open);
  }, [open, toggle]);

  const handleStarClick = useCallback(() => {
    if (onSelect) onSelect(id, !selected);
  }, [onSelect, selected, id]);

  return (
    <div className={styles.container} ref={innerRef} {...rest}>
      {drag && (
        <div className={styles.drag}>
          <Icon type="drugAndDrop" />
        </div>
      )}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={styles.textContainer} onClick={handleDescriptionClick}>
        {title && <span className={styles.title}>{title}</span>}
        {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
        {description && (
          <span
            className={cn(styles.description, {
              [styles.open]: open,
            })}
          >
            {description}
          </span>
        )}
      </div>

      {onSelect && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          onClick={handleStarClick}
          className={cn(styles.extra, { [styles.selected]: selected })}
        >
          <Icon type={selected ? 'fillStar' : 'star'} />
        </div>
      )}
    </div>
  );
};

export default ListItem;
