import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../../redux';
import { getMyStudyListRequest } from '../../../../redux/manageReducer';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  idStudy: number;
  setIdStudy: any;
  title: string;
  updateEndDate: () => void;
}

interface BoldProps {
  bold: boolean;
}

interface ButtonProps {
  done: boolean;
}

const StudyDoneModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  idStudy,
  title,
  setIdStudy,
  updateEndDate,
}) => {
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const dispatch = useDispatch();
  const onGetMyStudyList = useCallback(
    (token) => dispatch(getMyStudyListRequest(token)),
    [dispatch]
  );

  // 스터디 종료
  const setEndStudy = () => {
    axios({
      method: 'put',
      url: `http://localhost:4000/manage/endStudy/${idStudy}`,
      headers: { Authorization: login.token },
    })
      .then((res) => {
        onGetMyStudyList(login.token);
        setTimeout(() => {
          closeModal();
          setIdStudy(-1);
        }, 300);
      })
      .catch((err) => {
        alert('스터디 종료 실패');
      });
  };

  return (
    <BasicModal modalVisible={modalVisible}>
      <Container>
        <Title bold={false}>축하합니다! @@</Title>
        <Title bold>{title}</Title>
        <Title bold={false}>스터디가 종료되었습니다!</Title>
        <Desc>스터디를 완료하시고 팀원들을 평가해주세요!</Desc>
        <BottomWrap>
          <ButtonWrap done={false} onPress={updateEndDate}>
            <ButtonTitle done={false}>스터디 연장</ButtonTitle>
          </ButtonWrap>
          <ButtonWrap done onPress={setEndStudy}>
            <ButtonTitle done>스터디 완료</ButtonTitle>
          </ButtonWrap>
        </BottomWrap>
      </Container>
    </BasicModal>
  );
};

const Container = styled.View`
  padding-top: 30px;
  align-items: center;
`;

const Title = styled.Text<BoldProps>`
  font-size: 18px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: #2b2b2b;
  text-align: center;
`;

const Desc = styled.Text`
  padding: 20px 0;
  font-size: 14px;
  color: #2b2b2b;
`;

const BottomWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

const ButtonWrap = styled.TouchableOpacity<ButtonProps>`
  border-radius: 32px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => (props.done ? '#86E3C3' : '#EEEEEE')};
  margin-right: ${(props) => (props.done ? '0' : '5px')};
  margin-left: ${(props) => (props.done ? '5px' : '0')};
`;

const ButtonTitle = styled.Text<ButtonProps>`
  font-size: 14px;
  color: ${(props) => (props.done ? '#ffffff' : '#b4b4b4')};
`;

export default StudyDoneModal;
