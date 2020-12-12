import React, { FC } from 'react';
import CheckBox from '../../components/CheckBox';
import SearchInput from '../../components/SearchInput';
import { SeachBarProps } from './types';

import styles from './searchbar.module.css';

const GROUPS = [
  { id: '1', name: 'verb' },
  { id: '2', name: 'adjective' },
  { id: '3', name: 'noun' },
];

const SearchBarContainer: FC<SeachBarProps> = ({
  search,
  selectedGroups,
  onSearch,
  onChangeGroups,
}) => (
  <div className={styles.container}>
    <SearchInput defaultValue={search} onSearch={onSearch} />
    <div className={styles.groupsContainer}>
      {GROUPS.map(({ id, name }) => (
        <CheckBox
          id={id}
          key={`groups-${id}`}
          label={name}
          onCheck={onChangeGroups}
          defaultChecked={selectedGroups.includes(id)}
        />
      ))}
    </div>
  </div>
);

export default SearchBarContainer;
