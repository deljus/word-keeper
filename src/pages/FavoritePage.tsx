import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBarContainer from '../containers/SearchBar';
import { ListItem, DraggableList } from '../components/List';
import Grid, { Col, Row } from '../components/Grid';
import Alert from '../components/Alert';

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
      <Alert
        id="mic"
        type="danger"
        text="micasssso"
        onClose={() => {
          const s = 0;
        }}
      />
      <h1>{t('pages.starred')}</h1>
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
          <DraggableList
            items={ITEMS}
            renderItems={({ id, word, partOfSpeech, description }, prov) => (
              <ListItem
                key={id}
                title={word}
                subTitle={partOfSpeech}
                description={description}
                innerRef={prov.innerRef}
                {...prov.draggableProps}
                {...prov.dragHandleProps}
                draggable
              />
            )}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default IndexPage;
