import React, { FC, useEffect } from 'react';
import cn from 'classnames';
import Icon from '../Icon';
import { AlertProps } from './types';

import styles from './alert.module.css';

const Alert: FC<AlertProps> = ({ id, text, type, onClose, timeOut }) => {
  useEffect(() => {
    let timerId: number | null = null;
    if (onClose && timeOut) {
      timerId = window.setTimeout(() => {
        onClose(id);
      }, timeOut);
    }
    return (): void => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  const handleClose = (): void => {
    if (onClose) onClose(id);
  };

  return (
    <div className={styles.alertContainer}>
      <div className={cn(styles.alert, styles[type])}>
        <span className="text">{text}</span>
        {onClose && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div className={styles.close} onClick={handleClose}>
            <Icon type="close" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
