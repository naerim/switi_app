import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getStudyDetailRequest } from '../../../../redux/studyReducer';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  token: string;
  idStudy: number;
  setPopupVisible: (value: boolean) => void;
}

const RecruitDoneModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  token,
  idStudy,
  setPopupVisible,
}) => {
  const dispatch = useDispatch();
  const onGetStudyDetail = useCallback(
    (token, id) => dispatch(getStudyDetailRequest(token, id)),
    [dispatch]
  );
  const onPress = () => {
    axios({
      method: 'put',
      url: `http://localhost:4000/study/updateFlag/${idStudy}`,
      headers: { Authorization: token },
    })
      .then((res) => {
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
          onGetStudyDetail(token, idStudy);
        }, 2000);
        closeModal();
      })
      .catch((err) => {
        alert('스터디 모집 마감 실패');
      });
  };
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>스터디 모집을 마감하시겠습니까?</Title>
      <Desc>마감 이후 재모집은 어려워요.</Desc>
      <BasicButton text="모집 마감하기" onPress={onPress} disabled={false} />
    </BasicModal>
  );
};

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
  padding-top: 50px;
  font-weight: bold;
`;

const Desc = styled.Text`
  font-size: 14px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 45px;
  color: #2b2b2b;
`;

export default RecruitDoneModal;
