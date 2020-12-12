import React, { FC } from 'react';
import cn from 'classnames';
import Icon from '../../Icon';
import { ListItemProps } from './types';

import styles from './listitem.module.css';

const ListItem: FC<ListItemProps> = ({
  title,
  subTitle,
  description,
  selected,
}) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      {title && <span className={styles.title}>{title}</span>}
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
      {description && <span className={styles.description}>{description}</span>}
    </div>
    <div className={cn(styles.extra, { [styles.selected]: selected })}>
      <Icon type="star" />
    </div>
  </div>
);

export default ListItem;
