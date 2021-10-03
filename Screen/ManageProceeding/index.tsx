import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { useGoManagement } from '../../util/navigationHooks';
import { FlatList } from 'react-native';
import RecruitRenderItem from './components/RecruitRenderItem';
import { ManageType } from './interface';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getStudyMemberRequest } from '../../redux/manageReducer';

const ManageProceeding = ({ route }: any) => {
  const idx = route.params.idx;
  const title = route.params.title;
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

  useEffect(() => {
    setLoading(true);
    onGetStudyMember(login.token, idx);
    console.log(studyMember);
    setLoading(false);
  }, [idx]);

  if (loading) return <div>로딩중..</div>;
  if (!studyMember) return null;

  return (
    <Container>
      <BasicHeader title={title} onPress={goStudyManagement} display={true} />
      <Content>
        <Title>
          스티디원 (
          {studyMember.member && studyMember.member.studyMembers.length}명)
        </Title>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={studyMember.member && studyMember.member.studyMembers}
          renderItem={({ item }) => (
            <RecruitRenderItem index={item.id} item={item} desc={false} />
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
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const Content = styled.View`
  flex: 12;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 26px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
`;

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

export default ManageProceeding;
