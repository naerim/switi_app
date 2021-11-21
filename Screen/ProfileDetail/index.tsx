// 상대방 프로필 확인 페이지
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoBack } from '../../util/navigationHooks';
import Sugar from '../MyPage/Sugar';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getUserProfileRequest } from '../../redux/userReducer';
import {
  myCharacterType,
  myInterestType,
  myRegionType,
  myStateType,
} from '../MyPage_Profile/interface';
import ListContent from '../MyPage_Profile/components/ListCotent';
import UserName from './components/UserName';
import WithdrawButton from './components/WithdrawButton';
import DeleteMemberModal from './components/DeleteMemberModal';
import axios from 'axios';
import { getStudyMemberRequest } from '../../redux/manageReducer';
import { HostURL } from '../../redux/url';

const ProfileDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const studyId = route.params.studyId;
  const prev = route.params.prev;
  const goBack = useGoBack();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { userProfile } = useSelector(({ userReducer }: rootState) => ({
    userProfile: userReducer.userProfile,
  }));

  const dispatch = useDispatch();
  const onGetUserProfile = useCallback(
    // 사용자 프로필 가져오기
    (token, id) => dispatch(getUserProfileRequest(token, id)),
    [dispatch]
  );
  const onGetStudyMember = useCallback(
    // 사용자 프로필 가져오기
    (token, id) => dispatch(getStudyMemberRequest(token, id)),
    [dispatch]
  );

  const deleteMember = () => {
    axios({
      method: 'delete',
      url: `${HostURL}/manage/deleteMember/${studyId}/${idx}`,
      headers: { Authorization: login.token },
    })
      .then(() => {
        onGetStudyMember(login.token, studyId);
        closeModal();
        setTimeout(() => goBack(), 500);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    onGetUserProfile(login.token, idx);
    setLoading(false);
  }, [idx]);

  if (loading) return <div>로딩중..</div>;
  if (!userProfile) return null;

  const userAge = userProfile.age;
  const userCharacter = userProfile.Characters;
  const userRegion = userProfile.Regions;
  const userInterest = userProfile.Interests;
  const userState = userProfile.States;

  const profileData = [
    {
      title: '연령',
      content: <ContentText>{'만 ' + userAge + '세'}</ContentText>,
    },
    {
      title: '관심지역',
      content: userRegion.map((list: myRegionType) => (
        <Tag key={list.myRegion.RegionId}>
          <Text>{list.city}</Text>
        </Tag>
      )),
    },
    {
      title: '관심분야',
      content: userInterest.map((list: myInterestType) => (
        <Tag key={list.myInterest.InterestId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '상황',
      content: userState.map((list: myStateType) => (
        <Tag key={list.myState.StateId}>
          <Text>{list.category}</Text>
        </Tag>
      )),
    },
    {
      title: '나의 성격',
      flexDirection: 'column',
      content: userCharacter.map((list: myCharacterType) => (
        <Tag width="70%" key={list.myCharacter.CharacterId}>
          <Text>{list.content}</Text>
        </Tag>
      )),
    },
    {
      title: '자기소개',
      content: <ContentText>{userProfile.aboutme}</ContentText>,
    },
  ];

  return (
    <BasicContainer headerTitle="" display={true} onPress={goBack}>
      <TopWrap>
        <UserName name={userProfile.nickname} img={userProfile.profilepath} />
        <WithdrawButton prev={prev} onPress={showModal} />
      </TopWrap>
      <Sugar num={userProfile.sugar} />
      <Container>
        {profileData.map(({ title, content, flexDirection }) => (
          <ListContent key={title} title={title} flexDirection={flexDirection}>
            {content}
          </ListContent>
        ))}
      </Container>
      <DeleteMemberModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        deleteMember={deleteMember}
      />
    </BasicContainer>
  );
};

const Container = styled.View``;
const Tag = styled.View`
  padding: 7px;
  margin-top: 5px;
  border-radius: 20px;
  border: 1px #dbdbdb;
  margin-right: 5px;
  width: ${({ width }: { width?: string }) => width || 'auto'};
`;

const Text = styled.Text`
  font-size: 12px;
`;

const ContentText = styled.Text`
  font-size: 12px;
  margin-top: 7px;
`;

const TopWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ProfileDetail;
