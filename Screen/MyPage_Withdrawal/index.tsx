import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import TwoButton from './twoButton';
import RadioButtonContainer from './radioButtonContainer';
const MyPage_Withdrawal = () => {
  const goMyPage = useGoMyPage();

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
    <BasicContainer headerTitle="회원탈퇴" display onPress={goMyPage}>
      <GuideContainer>
        <Question>정말 이대로 그만두시겠습니까? :(</Question>
        <Answer>
          회원탈퇴 시 내 모집글, 스크랩, 당도 등 모든 관련 정보가 모두
          삭제됩니다.
        </Answer>
      </GuideContainer>
      <ReasonContainer>
        <Question>탈퇴하려는 이유가 무엇인가요?</Question>
        <RadioButtonContainer />
      </ReasonContainer>
      <ButtonContainer>
        <TwoButton
          text="나중에 할께요"
          onPress={onPressCancel}
          loading={isLoading}
        />
        <TwoButton
          text="네, 탈퇴할래요"
          onPress={onPressRealLogout}
          loading={isLoading}
          color="#86E3C3"
        />
      </ButtonContainer>
    </BasicContainer>
  );
};

const Question = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Answer = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
`;

const GuideContainer = styled.View`
  flex: 2;
  background-color: pink;
  justify-content: center;
`;

const ReasonContainer = styled.View`
  flex: 7;
  background-color: wheat;
`;

const ButtonContainer = styled.View`
  flex: 1;
  background-color: lightblue;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default MyPage_Withdrawal;
