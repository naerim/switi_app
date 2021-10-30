import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getMyApplyListRequest } from '../../../../redux/manageReducer';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  idStudy: number;
  token: string;
  setPopupVisible: (value: boolean) => void;
}

const CancelModal: React.FC<Props> = ({
  modalVisible,
  closeModal,
  idStudy,
  token,
  setPopupVisible,
}) => {
  const dispatch = useDispatch();
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );

  const onPress = () => {
    axios({
      method: 'delete',
      url: `http://localhost:4000/study/deleteApply/${idStudy}`,
      headers: { Authorization: token },
    })
      .then((res) => {
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
        }, 2000);
        closeModal();
        onGetMyApplyList(token);
      })
      .catch((err) => {
        alert('취소 실패');
      });
  };
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>스터디 신청을 취소하시겠습니까?</Title>
      <BasicButton text="신청 취소하기" onPress={onPress} disabled={false} />
    </BasicModal>
  );
};

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
  padding: 30px 0;
  font-weight: bold;
`;

export default CancelModal;
