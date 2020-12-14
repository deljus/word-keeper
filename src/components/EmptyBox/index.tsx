import React, { FC } from 'react';
import Icon from '../Icon';

import styles from './empty.module.css';

import { EmptyProps } from './types';

const EmptyBox: FC<EmptyProps> = ({ size, text }) => (
  <div className={styles.container}>
    <Icon type="emptyBox" size={size} />
    <span className={styles.text}>{text}</span>
  </div>
);

export default EmptyBox;
