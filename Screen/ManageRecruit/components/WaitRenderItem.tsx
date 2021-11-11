import React, { useCallback, useState } from 'react';
import { ItemType } from '../../ManageProceeding/interface';
import styled from 'styled-components/native';
import MemberImage from '../../ManageProceeding/components/MemberImage';
import AcceptButton from '../../ManageProceeding/components/AcceptButton';
import { useGoProfileDetail } from '../../../util/navigationHooks';
import RecruitModal from './RecruitModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import { getStudyMemberRequest } from '../../../redux/manageReducer';

const WaitRenderItem: React.FC<ItemType> = ({ item }) => {
  const goProfileDetail = useGoProfileDetail(item.idUser, item.idStudy, 1);
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;
  const [RecruitModalVisible, setRecruitModalVisible] = useState(false);
  const closeRecruitModal = () => setRecruitModalVisible(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const dispatch = useDispatch();
  const onGetStudyMember = useCallback(
    // 사용자 프로필 가져오기
    (token, id) => dispatch(getStudyMemberRequest(token, id)),
    [dispatch]
  );

  const onPress = () => setRecruitModalVisible(true);

  // 신청 수락
  const acceptApply = () => {
    const abortController = new AbortController();
    axios({
      method: 'put',
      url: `http://localhost:4000/manage/acceptApply/${item.id}`,
      headers: { Authorization: login.token },
    })
      .then(() => {
        closeRecruitModal();
        setTimeout(() => {
          onGetStudyMember(login.token, item.idStudy);
        }, 300);
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  };

  // 신청 거절
  const rejectApply = () => {
    axios({
      method: 'put',
      url: `http://localhost:4000/manage/rejectApply/${item.id}`,
      headers: { Authorization: login.token },
    })
      .then(() => {
        closeRecruitModal();
        setTimeout(() => {
          onGetStudyMember(login.token, item.idStudy);
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{item.User.nickname}</Title>
        <Desc>{limitTitle(item.apply_detail)}</Desc>
      </Content>
      <AcceptButton title="처리하기" display={true} onPress={onPress} />
      <RecruitModal
        item={item}
        modalVisible={RecruitModalVisible}
        rejectApply={rejectApply}
        acceptApply={acceptApply}
        closeModal={closeRecruitModal}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  margin-top: 14px;
  font-size: 14px;
  color: #2b2b2b;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  width: 80%;
  margin: 5px 0;
`;

export default WaitRenderItem;
