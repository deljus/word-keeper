import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import SearchBarContainer from '../containers/SearchBar';
import Grid, { Col, Row } from '../components/Grid';
import { queryAction } from '../core/actions/sagas';
import DictionaryContainer from '../containers/DictionaryContainer';

const IndexPage: FC = () => {
  const { t } = useTranslation();
  const [groups, setGroups] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAction({ search: '', groups: [] }));
  }, []);

  const handleSearch = useCallback((search) => {
    dispatch(queryAction({ search, groups: [] }));
  }, []);

  return (
    <Grid>
      <h1>{t('pages.main')}</h1>
      <Row>
        <Col span={3}>
          <SearchBarContainer
            search=""
            onSearch={handleSearch}
            onChangeGroups={setGroups}
            selectedGroups={groups}
          />
        </Col>
        <Col span={9}>
          <DictionaryContainer groups={groups} />
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
