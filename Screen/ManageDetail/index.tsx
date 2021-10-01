import React, { useCallback, useEffect, useState } from 'react';
import { useGoManagement } from '../../util/navigationHooks';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { FlatList } from 'react-native';
import { ManageType } from './interface';
import RecruitRenderItem from './components/RenderItem/RecruitRenderItem';
import WaitRenderItem from './components/RenderItem/WaitRenderItem';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getStudyMemberRequest } from '../../redux/manageReducer';
import { getMyPageRequest } from '../../redux/userReducer';

const ManageDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goStudyManagement = useGoManagement();
  const FlatListItemSeparator = () => <SeparatorLine />;

  const [loading, setLoading] = useState(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { studyMember } = useSelector(({ manageReducer }: rootState) => ({
    studyMember: manageReducer.studyMember,
  }));
  const dispatch = useDispatch();
  const onGetStudyMember = useCallback(
    // 사용자 프로필 가져오기
    (token, id) => dispatch(getStudyMemberRequest(token, id)),
    [dispatch]
  );
  const onGetMyPage = useCallback(
    // 사용자 닉네임, 당도, 프로필사진, 스크랩 수 불러오기
    (token) => dispatch(getMyPageRequest(token)),
    [dispatch]
  );

  useEffect(() => {
    setLoading(true);
    onGetStudyMember(login.token, idx);
    onGetMyPage(login.token);
    console.log(studyMember);
    setLoading(false);
  }, [idx]);

  if (loading) return <div>로딩중..</div>;
  if (!studyMember) return null;

  return (
    <Wrap>
      <BasicHeader
        title="스터디 관리"
        onPress={goStudyManagement}
        display={true}
      />
      <Container>
        <Content style={{ marginBottom: 50 }}>
          <Title>
            스티디원 (
            {studyMember.member && studyMember.member.studyMembers.length}명)
          </Title>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={studyMember.member && studyMember.member.studyMembers}
            renderItem={({ item }) => (
              <RecruitRenderItem index={item.id} item={item} />
            )}
            keyExtractor={(item: ManageType) => item.id.toString()}
            extraData={studyMember.member && studyMember.member.studyMembers}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <EmptyContainer>
                <EmptyFont>데이터 없음</EmptyFont>
              </EmptyContainer>
            )}
          />
        </Content>
        <Box />
        <Content>
          <Title>수락대기인원 ({studyMember.applyUser.length}명)</Title>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={studyMember.applyUser}
            renderItem={({ item }) => (
              <WaitRenderItem index={item.id} item={item} />
            )}
            keyExtractor={(item: ManageType) => item.id.toString()}
            extraData={studyMember.applyUser}
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

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

export default ManageDetail;
