import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Proceeding from './RenderItem/Proceeding';
import Recruitment from './RenderItem/Recruitment';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import EmptyScreen from '../../../Component/EmptyScreen';

interface Props {
  idx: number;
}

const ContentList: React.FC<Props> = ({ idx }) => {
  const FlatListItemSeparator = () => <SeparatorLine />;
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));
  const { myApplyList } = useSelector(({ manageReducer }: rootState) => ({
    myApplyList: manageReducer.myApplyList,
  }));

  if (!myStudyList) return null;
  if (!myApplyList) return null;

  return (
    <Container>
      <FlatList
        data={idx == 0 ? myApplyList : myStudyList}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) =>
          // 0: 진행중, 1: 모집글
          idx == 0 ? (
            <Proceeding index={item.id} item={item} />
          ) : (
            <Recruitment index={item.id} item={item} />
          )
        }
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={
          <EmptyScreen
            desc={
              idx === 0
                ? '참여하고 있는 스터디가 없습니다.'
                : '모집글이 없습니다.'
            }
          />
        }
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default ContentList;
