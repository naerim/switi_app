import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ApplyModal from './ApplyModal';
import CancelModal from './CancelModal';
import RecruitDoneModal from './RecruitDoneModal';

interface Props {
  id: number;
  btnText: string;
  token: string;
  setPopupVisible: (v: boolean) => void;
  setPopupText: (v: string) => void;
  flag: number; // 0 : 모집완료
}

interface ButtonProps {
  flag: number;
}

const BottomButton: React.FC<Props> = ({
  id,
  btnText,
  token,
  setPopupVisible,
  setPopupText,
  flag,
}) => {
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

  // 팝업창(검정)
  const confirmPopupText = () => {
    if (btnText === '신청 취소하기')
      setPopupText('스터디 신청이 취소되었습니다.');
  };

  useEffect(() => {
    confirmPopupText();
  }, [btnText]);

  return (
    <Container>
      <ColorButton onPress={setModal} flag={flag}>
        <ButtonText>{btnText}</ButtonText>
      </ColorButton>
      <ApplyModal
        token={token}
        idStudy={id}
        modalVisible={applyModalVisible}
        closeModal={closeApplyModal}
      />
      <CancelModal
        token={token}
        idStudy={id}
        setPopupVisible={setPopupVisible}
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

const ColorButton = styled.TouchableOpacity<ButtonProps>`
  background-color: #86e3c3;
  border-radius: 30px;
  height: ${(props) => (props.flag ? '40px' : '0px')};
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export default BottomButton;
