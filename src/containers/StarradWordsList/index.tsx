import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListItem, DraggableList } from '../../components/List';
import { RootState } from '../../core/store';
import {
  dictionaryToggleSelectedWordAction,
  moveStarredWords,
} from '../../core/actions/dictionaries';
import { DictionaryData } from '../../core/reducers/dictionaries';
import EmptyBox from '../../components/EmptyBox';

import { StarredWordsListProps } from './types';

const starredWordsDictionarySelector = (state: RootState) =>
  state.dictionaries.starredWords;

const filterItems = (groups: string[]) => (item: DictionaryData) =>
  groups.length > 0 ? groups.includes(item.partsOfSpeech) : true;

const searchWordMatch = (search: string) => (item: DictionaryData) =>
  item.word.startsWith(search);

const StarredWordsList: FC<StarredWordsListProps> = ({ search, groups }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const starredWords = useSelector(starredWordsDictionarySelector);

  const handleMoveItems = useCallback((from, to) => {
    dispatch(moveStarredWords(from.id, to.id));
  }, []);

  const handleSelectListItem = useCallback((id, selected) => {
    dispatch(dictionaryToggleSelectedWordAction(id, selected));
  }, []);

  const items = starredWords
    .filter(filterItems(groups))
    .filter(searchWordMatch(search));

  if (!items.length) {
    return <EmptyBox size="lg" text={t('messages.empty')} />;
  }

  return (
    <DraggableList
      items={items}
      onMoveItems={handleMoveItems}
      renderItems={(
        { id, word, partsOfSpeech, description, selected },
        prov
      ) => (
        <ListItem
          id={id}
          key={id}
          title={word}
          subTitle={partsOfSpeech}
          description={description}
          innerRef={prov.innerRef}
          selected={selected}
          onSelect={handleSelectListItem}
          {...prov.draggableProps}
          {...prov.dragHandleProps}
          drag
        />
      )}
    />
  );
};

export default StarredWordsList;
