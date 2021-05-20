import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import Input from '../../../AddStudy/components/Input';
import useInput from '../../../../util/useInput';
import BasicButton from '../../../../Component/BasicButton';
import ReasonInput from './ReasonInput';
import ApplyDoneModal from './ApplyDoneModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

const ApplyModal: React.FC<Props> = ({ modalVisible, closeModal }) => {
  const Contact = useInput('');
  const Reason = useInput('');
  const [DoneModalVisible, setDoneModalVisible] = useState(false);
  const showDoneModal = () => setDoneModalVisible(true);
  const closeDoneModal = () => setDoneModalVisible(false);

  const onPress = () => {
    closeModal();
    setTimeout(() => {
      showDoneModal();
    }, 500);
  };

  return (
    <Container>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <Wrap>
          <Input
            title="연락처(카카오톡 아이디 or 전화번호)"
            input={Contact}
            placeholder="카카오톡 아이디 혹은 전화번호를 입력해주세요"
          />
          <ReasonInput input={Reason} />
          <Title>신청 후 연락처와 신청사유는 수정이 어려워요.</Title>
        </Wrap>
        <BasicButton text="신청하기" onPress={onPress} />
      </BasicModal>
      <ApplyDoneModal
        modalVisible={DoneModalVisible}
        closeModal={closeDoneModal}
      />
    </Container>
  );
};

const Container = styled.View``;

const Wrap = styled.View`
  padding: 24px 0;
  margin-bottom: 50px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

export default ApplyModal;
