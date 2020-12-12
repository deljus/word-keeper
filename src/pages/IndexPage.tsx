import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBarContainer from '../containers/SearchBar';
import List, { ListItem } from '../components/List';
import Grid, { Col, Row } from '../components/Grid';
import Preloader, { generateItems } from '../components/Preloader';

const PRELOADER_ITEMS = generateItems(10);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createItems = ({ word, partOfSpeech, description, id }) => (
  <ListItem
    key={id}
    title={word}
    subTitle={partOfSpeech}
    description={description}
  />
);

const createPreloader = (n: number, index: number) => (
  <ListItem
    key={`preloader-${n}-${index}`}
    description={<Preloader col={n} />}
  />
);

const IndexPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <h1>{t('pages.main')}</h1>
      <Row>
        <Col span={3}>
          <SearchBarContainer
            search=""
            onSearch={console.log}
            onChangeGroups={console.log}
            selectedGroups={['1']}
          />
        </Col>
        <Col span={9}>
          <List>
            {loading
              ? PRELOADER_ITEMS.map(createPreloader)
              : ITEMS.map(createItems)}
          </List>
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
