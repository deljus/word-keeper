import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Icon from '../../Icon';
import { ListItemProps } from './types';

import styles from './listitem.module.css';

const ListItem: FC<ListItemProps> = ({
  title,
  subTitle,
  description,
  selected,
  onSelect,
  draggable,
  innerRef,
  ...rest
}) => {
  const [open, toggle] = useState(false);
  const { t } = useTranslation();
  const handleDescriptionClick = useCallback(() => {
    toggle(!open);
  }, [open, toggle]);
  return (
    <div className={styles.container} ref={innerRef} {...rest}>
      {draggable && (
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

      <div
        data-for="star-tooltip"
        data-tip={t('tooltips.star')}
        data-delay-show={1000}
        className={cn(styles.extra, { [styles.selected]: selected })}
      >
        {onSelect && <Icon type="star" />}
      </div>
    </div>
  );
};

export default ListItem;
