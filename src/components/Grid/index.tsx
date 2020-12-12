import React, { FC } from 'react';
import cn from 'classnames';
import { GridProps, ColProps, RowProps } from './types';
import styles from './grid.module.css';

const Grid: FC<GridProps> = ({ className, children }) => (
  <div className={cn(styles.grid, className)}>{children}</div>
);

export const Row: FC<RowProps> = ({ className, children }) => (
  <div className={cn(styles.gridRow, className)}>{children}</div>
);

export const Col: FC<ColProps> = ({ className, children, span = 12 }) => (
  <div className={cn(styles.gridCol, styles[`col${span}`], className)}>
    {children}
  </div>
);

export default Grid;
