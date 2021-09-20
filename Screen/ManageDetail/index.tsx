import React, { useCallback, useEffect, useState } from 'react';
import BasicContainer from '../../Component/BasicContainer';
import { useGoManagement } from '../../util/navigationHooks';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { FlatList } from 'react-native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { DataType } from '../Home/interface';
import { ManageType } from './interface';
import RecruitRenderItem from './components/RenderItem/RecruitRenderItem';

const member = [
  {
    studyId: 10,
    UserId: 2,
    contact: '01012345',
  },
  {
    studyId: 10,
    UserId: 1,
    contact: '0101234522',
  },
];

const ManageDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goStudyManagement = useGoManagement();
  const FlatListItemSeparator = () => <SeparatorLine />;

  // 데이터 연결 후 헤더 변경하기
  // const [content, setContent] = useState([]);
  // const { onlineStudyList, offlineStudyList } = useSelector(
  //   (state: rootState) => state.studyReducer
  // );
  //
  // useEffect(() => {
  //   setContent(onlineStudyList.concat(offlineStudyList));
  // }, []);
  //
  // const item: any = content.find((i: any) => i.id === idx);

  // headerTitle={item && item.title}
  return (
    <Wrap>
      <BasicHeader
        title="스터디 관리"
        onPress={goStudyManagement}
        display={true}
      />
      <Container>
        <Content style={{ marginBottom: 50 }}>
          <Title>스티디원 (4명)</Title>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={member}
            renderItem={useCallback(
              ({ item }) => (
                <RecruitRenderItem index={item.UserId} item={item} />
              ),
              []
            )}
            keyExtractor={(item: ManageType) => item.UserId.toString()}
            extraData={member}
            contentContainerStyle={{ paddingBottom: 80 }}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
          />
        </Content>
        <Box />
        <Content>
          <Title>수락대기인원 (5명)</Title>
        </Content>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 12;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 26px;
`;

const Box = styled.View`
  background-color: #f3f3f3;
  height: 10px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default ManageDetail;
