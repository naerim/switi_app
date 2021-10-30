import React, { useState } from 'react';
import styled from 'styled-components/native';
import ApplyModal from './ApplyModal';
import CancelModal from './CancelModal';
import RecruitDoneModal from './RecruitDoneModal';

interface Props {
  id: number;
  btnText: string;
  token: string;
}

const BottomButton: React.FC<Props> = ({ id, btnText, token }) => {
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const closeCancelModal = () => setCancelModalVisible(false);
  const [applyModalVisible, setApplyModalVisible] = useState(false);
  const closeApplyModal = () => setApplyModalVisible(false);
  const [doneModalVisible, setDoneModalVisible] = useState(false);
  const closeDoneModal = () => setDoneModalVisible(false);

  // 버튼 텍스트에 따라 모달창 다르게 설정
  const setModal = () => {
    if (btnText === '신청 취소하기') setCancelModalVisible(true);
    else if (btnText === '신청하기') setApplyModalVisible(true);
    else setDoneModalVisible(true);
  };

  return (
    <Container>
      <ColorButton onPress={setModal}>
        <ButtonText>{btnText}</ButtonText>
      </ColorButton>
      <ApplyModal
        token={token}
        idStudy={id}
        modalVisible={applyModalVisible}
        closeModal={closeApplyModal}
      />
      <CancelModal
        modalVisible={cancelModalVisible}
        closeModal={closeCancelModal}
      />
      <RecruitDoneModal
        modalVisible={doneModalVisible}
        closeModal={closeDoneModal}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 2;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
  justify-content: flex-end;
`;

const ColorButton = styled.TouchableOpacity`
  background-color: #86e3c3;
  border-radius: 30px;
  height: 40px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export default BottomButton;
