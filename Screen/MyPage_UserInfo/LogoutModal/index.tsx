import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';
import TwoModalButton from '../../SignIn/components/EmailAuthModal/twoModalButton';
import LogoutDoneModal from './LogoutDoneModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const LogoutModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  const [DoneModalVisible, setDoneModalVisible] = useState(false);
  const showDoneModal = () => setDoneModalVisible(true);
  const closeDoneModal = () => setDoneModalVisible(false);

  const onPressLogout = () => {
    closeModal();
    setTimeout(() => {
      showDoneModal();
    }, 500);

    // axios({
    //     method: 'post',
    //     url: `http://localhost:4000/study/applyStudy/${idStudy}`,
    //     data: {
    //         contact: Contact.value,
    //         apply_detail: Reason.value,
    //         idStudy: idStudy,
    //     },
    //     headers: { Authorization: token },
    // })
    //     .then((res) => {
    //         onGetMyApplyList(token);
    //         closeModal();
    //         setTimeout(() => {
    //             showDoneModal();
    //         }, 500);
    //     })
    //     .catch((err) => {
    //         alert('신청 실패');
    //     });
  };

  return (
    <Container>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <ModalBigText>로그아웃 하시겠습니까?</ModalBigText>
        <ModalSmallText>
          {'스터디와 클래스 신청 및 모집에\n 제한이 생겨요 :('}
        </ModalSmallText>
        <ModalButtonContainer>
          <TwoModalButton text="취소" onPress={closeModal} />
          <TwoModalButton
            text="로그아웃"
            onPress={onPressLogout}
            color="#86E3C3"
          />
        </ModalButtonContainer>
      </BasicModal>
      <LogoutDoneModal
        modalVisible={DoneModalVisible}
        closeModal={closeDoneModal}
      />
    </Container>
  );
};

const Container = styled.View``;

const ModalBigText = styled.Text`
  font-size: 18px;
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: center;
  font-weight: bold;
`;

const ModalSmallText = styled.Text`
  font-size: 14px;
  text-align: center;
  padding-bottom: 50px;
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default LogoutModal;
