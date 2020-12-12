import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBarContainer from '../containers/SearchBar';
import List, { ListItem } from '../components/List';
import Grid, { Col, Row } from '../components/Grid';

const ITEMS = [
  {
    id: 'Freedom',
    word: 'Freedom',
    partOfSpeech: 'verb',
    description:
      'the quality or state of being free: such as the quality or state of being free: such as the quality or state of being free: such as the quality or state of being free: such as',
  },
  {
    id: 'Freedom1',
    word: 'Freedom',
    partOfSpeech: 'verb',
    description:
      'the quality or state of being free: such as the quality or state of being free: such as',
  },
  {
    id: 'Freedom2',
    word: 'Freedom',
    partOfSpeech: 'verb',
    description:
      'the quality or state of being free: such as the quality or state of being free: such as',
  },
];

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
            {ITEMS.map(({ word, partOfSpeech, description, id }) => (
              <ListItem
                key={id}
                title={word}
                subTitle={partOfSpeech}
                description={description}
              />
            ))}
          </List>
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
