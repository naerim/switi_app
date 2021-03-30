import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StudyList } from '../../../Data';
import RenderItem from './RenderItem';

interface Props {
  idx: number;
}

const StudyFlatList: React.FC<Props> = ({ idx }) => {
  const FlatListItemSeparator = () => <Line />;

  // 0 : 온라인, 1 : 오프라인
  const OnOffStudy = StudyList.filter((i) => i.online_flag === idx);

  return (
    <Container>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={OnOffStudy}
        renderItem={RenderItem}
        keyExtractor={(item) => item.idx.toString()}
        extraData={OnOffStudy}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 0 24px;
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default StudyFlatList;
