import React, { FC } from 'react';
import cn from 'classnames';
import { PreloaderProps } from './types';
import styles from './preloader.module.css';

const Preloader: FC<PreloaderProps> = ({ col = 10 }) => (
  <div className={cn(styles.container, styles[`width${col}`])} />
);

const getRandom = (arr: number[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateItems = (count: number): number[] =>
  Array(count)
    .fill(null)
    .map(() => getRandom([10, 25, 50, 60, 75, 100]));

export default Preloader;
