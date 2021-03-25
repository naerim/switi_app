import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfoContainer from './userInfoContainer';
import UserName from '../../Component/UserName';
import BasicModal from '../../Component/BasicModal';
import ModalButton from './modal/modalButton';
const UserInfo = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [configModalVisible, setConfigModalVisible] = useState<boolean>(false);

  const onPressLogout = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
    setConfigModalVisible(false);
  };

  const onPressCancel = () => setModalVisible(false);
  const onPressRealLogout = () => {
    setModalVisible(false);
    setConfigModalVisible(true);
  };
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UserInfoContainer headerTitle="회원정보">
      <SmallLine />
      <UserImageContainer>
        <UserImage source={require('./image/profile.png')} />
        <UserName title="사용자" />
      </UserImageContainer>
      <Line />
      <Text>회원정보 수정</Text>
      <SmallLine />
      <Text onPress={onPressLogout}>로그아웃</Text>
      <SmallLine />
      <LinkText>회원탈퇴</LinkText>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <ModalBigText>로그아웃 하시겠습니까?</ModalBigText>
        <ModalSmallText>
          스터디와 클래스 신청 및 모집에 제한이 생겨요 :(
        </ModalSmallText>
        <ModalButtonContainer>
          <ModalButton
            text="취소"
            onPress={onPressCancel}
            loading={isLoading}
          />
          <ModalButton
            text="로그아웃"
            onPress={onPressRealLogout}
            loading={isLoading}
            color="#86E3C3"
          />
        </ModalButtonContainer>
      </BasicModal>
      <BasicModal modalVisible={configModalVisible} closeModal={closeModal}>
        <ModalBigText>로그아웃 로그아웃이 완료되었습니다?</ModalBigText>
        <ModalSmallText>
          로그아웃이 완료되었습니다! 다음에 또 뵈어요:)
        </ModalSmallText>
      </BasicModal>
    </UserInfoContainer>
  );
};

const UserImage = styled.Image`
  width: 68px;
  height: 68px;
`;

const UserImageContainer = styled.View`
  margin: 0px 0;
  align-items: center;
  padding: 20px 0;
`;

const Line = styled.Text`
  width: 100%;
  height: 10px;
  background-color: #f3f3f3;
`;

const SmallLine = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
`;

const Text = styled.Text`
  font-size: 12px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;
`;

const LinkText = styled.Text`
  color: #b4b4b4;
  font-size: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 24px;
  text-decoration: #b4b4b4 underline;
`;

const ModalBigText = styled.Text`
  font-size: 18px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`;

const ModalSmallText = styled.Text`
  font-size: 14px;
  text-align: center;
  padding-bottom: 20px;
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default UserInfo;
