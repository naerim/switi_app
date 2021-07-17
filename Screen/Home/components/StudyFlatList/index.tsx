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

interface Props {
  idx: number;
}

const StudyFlatList: React.FC<Props> = ({ idx }) => {
  const [checked, setChecked] = useState(true);
  const FlatListItemSeparator = () => <SeparatorLine />;

  const dispatch = useDispatch();
  const fetchOnlineStudyList = () => dispatch(onlineStudyListRequest());
  const fetchOfflineStudyList = () => dispatch(offlineStudyListRequest());
  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );

  const [content, setContent] = useState([]);

  useEffect(() => {
    // axios
    //   .get('http://localhost:4000/study/studyList/1?order=update')
    //   .then((response) => {
    //     setContent(response.data.study);
    //     console.log('hi');
    //     console.log(content);
    //   });

    fetchOnlineStudyList();
    fetchOfflineStudyList();
    idx === 0 ? setContent(onlineStudyList) : setContent(offlineStudyList);
    //setContent(studyList);
  }, []);

  // 0 : 온라인, 1 : 오프라인
  // const OnOffStudy = StudyList.filter((i) => i.online_flag === idx);

  const handleLoadMore = () => {
    console.log('reached');
  };

  return (
    <Container>
      <ListHeader num={2} check={{ checked, setChecked }} />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={content}
        renderItem={({ item }) => <RenderItem index={item.id} item={item} />}
        keyExtractor={(item) => item.id.toString()}
        extraData={content}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    </Container>
  );
};
// showsVerticalScrollIndicator={false}

const Container = styled.View`
  margin: 0 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default StudyFlatList;
