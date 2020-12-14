import React, { FC } from 'react';
import Icon from '../Icon';

import styles from './warningbox.module.css';

import { WarningBoxProps } from './types';

const WarningBox: FC<WarningBoxProps> = ({ size, text }) => (
  <div className={styles.container}>
    <Icon type="cry" size={size} />
    <span className={styles.text}>{text}</span>
  </div>
);

export default WarningBox;
