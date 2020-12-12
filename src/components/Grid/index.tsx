import React, { FC } from 'react';
import cn from 'classnames';
import { GridProps, ColProps, RowProps } from './types';
import styles from './grid.module.css';

const Grid: FC<GridProps> = ({ className }) => (
  <div className={cn(styles.grid, className)} />
);

export const Row: FC<RowProps> = ({ className, children }) => (
  <div className={cn(styles.grid, className)}>{children}</div>
);

export const Col: FC<ColProps> = ({ className, children }) => (
  <div className={cn(styles.grid, className)}>{children}</div>
);

export default Grid;
