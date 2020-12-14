import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import List, { ListItem } from '../../components/List';
import EmptyBox from '../../components/EmptyBox';
import WarningBox from '../../components/WarningBox';
import Preloader, { generateItems } from '../../components/Preloader';
import { RootState } from '../../core/store';
import { dictionaryToggleSelectedWordAction } from '../../core/actions/dictionaries';
import { DictionaryData } from '../../core/reducers/dictionaries';

import { DictionaryContainerProps } from './types';

const PRELOADER_ITEMS = generateItems(10);

const fetchSelector = (state: RootState) => state.fetch;
const dictionariesSelector = (state: RootState) => state.dictionaries;

const filterItems = (groups: string[]) => (items: DictionaryData) =>
  groups.length > 0 ? groups.includes(items.partsOfSpeech) : true;

const createPreloader = (n: number, index: number) => (
  <ListItem
    id={`id-${n}-${index}`}
    key={`preloader-${n}-${index}`}
    description={<Preloader col={n} />}
  />
);

const DictionaryContainer: FC<DictionaryContainerProps> = ({ groups }) => {
  const { t } = useTranslation();
  const { loading, error } = useSelector(fetchSelector, shallowEqual);
  const { dictionary } = useSelector(dictionariesSelector);
  const dispatch = useDispatch();

  const handleSelectListItem = useCallback((id, selected) => {
    dispatch(dictionaryToggleSelectedWordAction(id, selected));
  }, []);

  if (loading) {
    return <List>{PRELOADER_ITEMS.map(createPreloader)}</List>;
  }

  if (error) {
    return <WarningBox size="lg" text={t('messages.error')} />;
  }

  const items = dictionary.filter(filterItems(groups)).slice(0, 10);

  if (!items.length) {
    return <EmptyBox size="lg" text={t('messages.empty')} />;
  }

  return (
    <List>
      {items.map(
        ({
          word,
          partsOfSpeech,
          description,
          id,
          selected,
        }: DictionaryData) => (
          <ListItem
            id={id}
            key={id}
            title={word}
            subTitle={partsOfSpeech}
            description={description}
            selected={selected}
            onSelect={handleSelectListItem}
          />
        )
      )}
    </List>
  );
};

export default DictionaryContainer;
