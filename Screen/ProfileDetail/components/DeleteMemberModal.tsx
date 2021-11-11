import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  deleteMember: () => void;
}

interface DeleteProps {
  delete: boolean;
}

const DeleteMemberModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  deleteMember,
}) => {
  return (
    <Container>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <Wrap>
          <Title>해당 스터디원을 탈퇴처리 하시겠습니까?</Title>
          <Desc>
            {
              '스터디에 참여하지 않거나\n비도덕적 행위를 하는 회원을 탈퇴처리합니다.\n탈퇴철회가 불가능하니 신중하게 결정해주세요.'
            }
          </Desc>
        </Wrap>
        <BottomWrap>
          <ButtonWrap delete={false} onPress={closeModal}>
            <ButtonTitle delete={false}>취소</ButtonTitle>
          </ButtonWrap>
          <ButtonWrap delete onPress={deleteMember}>
            <ButtonTitle delete>탈퇴시키기</ButtonTitle>
          </ButtonWrap>
        </BottomWrap>
      </BasicModal>
    </Container>
  );
};

const Container = styled.View``;

const Wrap = styled.View`
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 16px;
  font-weight: bold;
`;

const Desc = styled.Text`
  color: #2b2b2b;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
`;

const BottomWrap = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const ButtonWrap = styled.TouchableOpacity<DeleteProps>`
  border-radius: 32px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => (props.delete ? '#86E3C3' : '#EEEEEE')};
  margin-right: ${(props) => (props.delete ? '0' : '5px')};
  margin-left: ${(props) => (props.delete ? '5px' : '0')};
`;

const ButtonTitle = styled.Text<DeleteProps>`
  font-size: 14px;
  color: ${(props) => (props.delete ? '#ffffff' : '#b4b4b4')};
`;

export default DeleteMemberModal;
