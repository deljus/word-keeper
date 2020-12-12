import React, { FC, useState, ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'ts-debounce';
import Icon from '../Icon';
import { SearchInputProps } from './types';

import styles from './searchInput.module.css';

const WAIT_MILLISECONDS = 300;

const SearchInput: FC<SearchInputProps> = ({ defaultValue = '', onSearch }) => {
  const { t } = useTranslation();

  const handleSearch = useCallback(debounce(onSearch, WAIT_MILLISECONDS), []);

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      handleSearch(target.value);
    },
    []
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        onChange={handleInputChange}
        placeholder={t('search.placeholder')}
        defaultValue={defaultValue}
      />
      <Icon type="search" className={styles.icon} />
    </div>
  );
};

export default SearchInput;
