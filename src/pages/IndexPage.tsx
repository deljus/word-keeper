import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import SearchBarContainer from '../containers/SearchBar';
import List, { ListItem } from '../components/List';
import Grid, { Col, Row } from '../components/Grid';
import Preloader, { generateItems } from '../components/Preloader';
import { RootState } from '../core/store';
import { queryAction } from '../core/actions/sagas';
import { dictionaryToggleSelectedWordAction } from '../core/actions/dictionaries';
import { DictionaryData } from '../core/reducers/dictionaries';

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

const IndexPage: FC = () => {
  const { t } = useTranslation();
  const { loading } = useSelector(fetchSelector, shallowEqual);
  const { dictionary } = useSelector(dictionariesSelector, shallowEqual);
  const [groups, setGroups] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAction({ search: '', groups: [] }));
  }, []);

  const handleSearch = useCallback((search) => {
    dispatch(queryAction({ search, groups: [] }));
  }, []);

  const handleCheckBox = useCallback(
    (id, label, selected) => {
      if (selected) {
        groups.push(label);
        setGroups([...groups]);
      } else {
        setGroups(groups.filter((g) => g !== label));
      }
    },
    [groups]
  );

  const handleSelectListItem = useCallback((id, selected) => {
    dispatch(dictionaryToggleSelectedWordAction(id, selected));
  }, []);

  return (
    <Grid>
      <h1>{t('pages.main')}</h1>
      <Row>
        <Col span={3}>
          <SearchBarContainer
            search=""
            onSearch={handleSearch}
            onChangeGroups={handleCheckBox}
            selectedGroups={groups}
          />
        </Col>
        <Col span={9}>
          <List>
            {loading
              ? PRELOADER_ITEMS.map(createPreloader)
              : dictionary
                  .filter(filterItems(groups))
                  .slice(0, 10)
                  .map(
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
                        description={description.join('')}
                        selected={selected}
                        onSelect={handleSelectListItem}
                      />
                    )
                  )}
          </List>
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
