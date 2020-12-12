import React, { FC, createElement } from 'react';
import cn from 'classnames';
import { IconProps, SizesType } from './types';
import * as icons from './svg';

import styles from './icon.module.css';

const sizes: SizesType = {
  sm: [20, 20],
  md: [40, 40],
  lg: [60, 60],
};

const Icon: FC<IconProps> = ({ size = 'sm', type, className }) => {
  const elem = icons[type];
  const [width, height] = sizes[size];
  return (
    <span className={cn(styles.icon, className)}>
      {createElement(elem, { width, height })}
    </span>
  );
};
export default Icon;
