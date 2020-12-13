import React, { ChangeEvent, FC, useCallback } from 'react';
import cn from 'classnames';
import { CheckBoxProps } from './types';

import styles from './checkbox.module.css';

const CheckBox: FC<CheckBoxProps> = ({
  id,
  defaultChecked,
  label,
  onCheck,
  className,
}) => {
  const handlerCheckBox = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onCheck(id, label, target.checked);
    },
    []
  );

  return (
    <label className={cn(styles.container, className)}>
      {label}
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={handlerCheckBox}
      />
      <span className={styles.checkMark} />
    </label>
  );
};

export default CheckBox;
