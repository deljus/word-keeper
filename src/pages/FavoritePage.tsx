import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBarContainer from '../containers/SearchBar';
import Grid, { Col, Row } from '../components/Grid';
import StarradWordsList from '../containers/StarradWordsList';

const IndexPage: FC = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Grid>
      <h1>{t('pages.starred')}</h1>
      <Row>
        <Col span={3}>
          <SearchBarContainer
            search={search}
            onSearch={setSearch}
            onChangeGroups={setGroups}
            selectedGroups={groups}
          />
        </Col>
        <Col span={9}>
          <StarradWordsList search={search} groups={groups} />
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
