import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import RenderItem from './RenderItem';
import ListHeader from '../ListHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  onlineStudyListRequest,
  offlineStudyListRequest,
} from '../../../../redux/studyReducer';
import { rootState } from '../../../../redux';
import { DataType } from '../../interface';

interface Props {
  idx: number;
}

const StudyFlatList: React.FC<Props> = ({ idx }) => {
  const [checked, setChecked] = useState(false);
  const FlatListItemSeparator = () => <SeparatorLine />;

  const dispatch = useDispatch();
  const fetchOnlineStudyList = (order: boolean) =>
    dispatch(onlineStudyListRequest(order));
  const fetchOfflineStudyList = (order: boolean) =>
    dispatch(offlineStudyListRequest(order));

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchOnlineStudyList(checked);
    fetchOfflineStudyList(checked);
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
  }, [checked]);

  // 0 : 온라인, 1 : 오프라인
  // const OnOffStudy = StudyList.filter((i) => i.online_flag === idx);

  const handleLoadMore = () => {
    console.log('reached');
  };

  return (
    <Container>
      <ListHeader num={content.length} check={{ checked, setChecked }} />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={content}
        renderItem={({ item }) => <RenderItem index={item.id} item={item} />}
        keyExtractor={(item: DataType) => item.id.toString()}
        extraData={content}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 0 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default StudyFlatList;
