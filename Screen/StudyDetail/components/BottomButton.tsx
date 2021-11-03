import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ApplyModal from './ApplyModal';
import CancelModal from './CancelModal';
import RecruitDoneModal from './RecruitDoneModal';
import LeaveModal from './LeaveModal';

interface Props {
  id: number;
  btnText: string;
  token: string;
  setPopupVisible: (v: boolean) => void;
  setPopupText: (v: string) => void;
  flag: number; // 0 : 모집완료
  setDone: (v: boolean) => void; // 모집마감하기 버튼일 경우 검정팝업창 위치 변경
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
  setDone,
}) => {
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const closeCancelModal = () => setCancelModalVisible(false);
  const [applyModalVisible, setApplyModalVisible] = useState(false);
  const closeApplyModal = () => setApplyModalVisible(false);
  const [doneModalVisible, setDoneModalVisible] = useState(false);
  const closeDoneModal = () => setDoneModalVisible(false);
  const [leaveModalVisible, setLeaveModalVisible] = useState(false);
  const closeLeaveModal = () => setLeaveModalVisible(false);

  // 버튼 텍스트에 따라 모달창 다르게 설정
  const setModal = () => {
    if (btnText === '신청 취소하기') setCancelModalVisible(true);
    else if (btnText === '신청하기') setApplyModalVisible(true);
    else if (btnText === '탈퇴하기') setLeaveModalVisible(true);
    else setDoneModalVisible(true);
  };

  // 팝업창(검정)
  const confirmPopupText = () => {
    if (btnText === '신청 취소하기') {
      setPopupText('스터디 신청이 취소되었습니다.');
      setDone(false);
    } else if (btnText === '모집 마감하기') {
      setPopupText('스터디 모집이 마감되었습니다.');
      setDone(true);
    } else if (btnText === '탈퇴하기') {
      setPopupText('스터디에서 탈퇴되었습니다.');
      setDone(false);
    }
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
        token={token}
        idStudy={id}
        setPopupVisible={setPopupVisible}
        modalVisible={doneModalVisible}
        closeModal={closeDoneModal}
      />
      <LeaveModal
        modalVisible={leaveModalVisible}
        closeModal={closeLeaveModal}
        token={token}
        idStudy={id}
        setPopupVisible={setPopupVisible}
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
