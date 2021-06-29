import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/ContainerWithBack';
import { useGoMyPageUserInfo } from '../../util/navigationHooks';
import TwoButton from './twoButton';
import RadioButtonContainer from './radioButtonContainer';
import ReasonText from './reasonText';
import useInput from '../../util/useInput';
import BasicModal from '../../Component/BasicModal';

const MyPage_Withdrawal = () => {
  const goMyPage = useGoMyPageUserInfo();
  const [reason, setReason] = useState(0);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const reasonInput = useInput('');
  const closeModal = () => {
    setModalVisible(false);
  };
  const onPressWithdrawal = () => setModalVisible(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BasicContainer headerTitle="회원탈퇴" display onPress={goMyPage}>
      <MarginContainer>
        <GuideContainer>
          <Question>정말 이대로 그만두시겠습니까? :(</Question>
          <Answer>
            회원탈퇴 시 내 모집글, 스크랩, 당도 등 모든 관련 정보가 모두
            삭제됩니다.
          </Answer>
        </GuideContainer>
        <ReasonContainer>
          <Question>탈퇴하려는 이유가 무엇인가요?</Question>
          <RadioButtonContainer input={{ reason, setReason }} />
          <ReasonText input={reasonInput} />
        </ReasonContainer>
        <ButtonContainer>
          <ButtonRowContainer>
            <TwoButton
              text="나중에 할께요"
              onPress={goMyPage}
              loading={isLoading}
            />
            <TwoButton
              text="네, 탈퇴할래요"
              onPress={onPressWithdrawal}
              loading={isLoading}
              color="#86E3C3"
              textColor="white"
            />
          </ButtonRowContainer>
        </ButtonContainer>
        <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
          <ModalTextContainer>
            <ModalBigText>회원탈퇴가 완료되었습니다</ModalBigText>
            <ModalSmallText>계정이 삭제되었습니다.</ModalSmallText>
            <ModalSmallText>
              다음에 다시 볼 수 있었으면 좋겠네요 :)
            </ModalSmallText>
          </ModalTextContainer>
        </BasicModal>
      </MarginContainer>
    </BasicContainer>
  );
};

const MarginContainer = styled.View`
  flex: 1;
  margin-right: 24px;
  margin-left: 24px;
`;

const Question = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Answer = styled.Text`
  flex: 2;
  font-size: 12px;
  margin-bottom: 10px;
`;

const GuideContainer = styled.View`
  padding-top: 10px;
  flex: 2;
`;

const ReasonContainer = styled.View`
  flex: 7;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ModalTextContainer = styled.View`
  padding: 40px;
`;

const ModalBigText = styled.Text`
  font-size: 18px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  font-weight: bold;
`;

const ModalSmallText = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export default MyPage_Withdrawal;
