import React, { useCallback } from 'react';
import { useGoManagement } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { FlatList } from 'react-native';
import { ManageType } from './interface';
import RecruitRenderItem from './components/RenderItem/RecruitRenderItem';
import WaitRenderItem from './components/RenderItem/WaitRenderItem';

const member = [
  {
    id: 0,
    apply: 0,
    idStudy: 10,
    idUser: 2,
    contact: '01012345',
    apply_detail: '안녕하세요',
  },
  {
    id: 1,
    apply: 1,
    idStudy: 10,
    idUser: 1,
    contact: '0101234522',
    apply_detail: '스터디 신청합니다',
  },
  {
    id: 3,
    apply: 1,
    idStudy: 10,
    idUser: 3,
    contact: '0101234522',
    apply_detail: '스터디 신청합니다. 스터디 신청합니다. 스터디 신청합니다.',
  },
  {
    id: 3,
    apply: 4,
    idStudy: 10,
    idUser: 4,
    contact: '0101234522',
    apply_detail: '스터디 신청합니다',
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
                <RecruitRenderItem index={item.idUser} item={item} />
              ),
              []
            )}
            keyExtractor={(item: ManageType) => item.idUser.toString()}
            extraData={member}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
          />
        </Content>
        <Box />
        <Content>
          <Title>수락대기인원 (5명)</Title>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={member}
            renderItem={useCallback(
              ({ item }) => (
                <WaitRenderItem index={item.idUser} item={item} />
              ),
              []
            )}
            keyExtractor={(item: ManageType) => item.idUser.toString()}
            extraData={member}
            onEndReachedThreshold={0}
            contentContainerStyle={{ paddingBottom: 0 }}
            showsVerticalScrollIndicator={false}
          />
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
  flex: 1;
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
