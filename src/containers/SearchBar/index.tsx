import React, { FC } from 'react';
import CheckBox from '../../components/CheckBox';
import SearchInput from '../../components/SearchInput';
import { Groups } from '../../core/constants';
import { SeachBarProps } from './types';

import styles from './searchbar.module.css';

const GROUPS = Object.values(Groups).map((name, id) => ({
  id: id.toString(),
  name,
}));

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
