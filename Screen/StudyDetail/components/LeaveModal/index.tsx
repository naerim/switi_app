import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../../Component/BasicModal';
import BasicButton from '../../../../Component/BasicButton';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getStudyDetailRequest } from '../../../../redux/studyReducer';
import { getMyApplyListRequest } from '../../../../redux/manageReducer';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  token: string;
  idStudy: number;
  setPopupVisible: (value: boolean) => void;
}

const LeaveModal: React.FC<Props> = ({
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
  const onGetMyApplyList = useCallback(
    // 스터디 신청 리스트 가져오기
    (token) => dispatch(getMyApplyListRequest(token)),
    [dispatch]
  );
  const onPress = () => {
    axios({
      method: 'delete',
      url: `http://localhost:4000/study/quitStudy/${idStudy}`,
      headers: { Authorization: token },
    })
      .then((res) => {
        onGetMyApplyList(token);
        onGetStudyDetail(token, idStudy);
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
        }, 2000);
        closeModal();
      })
      .catch((err) => {
        alert('스터디 탈퇴 실패');
      });
  };
  return (
    <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
      <Title>스터디에서 탈퇴하시겠습니까?</Title>
      <Desc>
        {'탈퇴 후 탈퇴 취소는 불가하며,\n탈퇴 시 당도가 1% 깎일 수 있어요 :('}
      </Desc>
      <BasicButton text="탈퇴하기" onPress={onPress} disabled={false} />
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
  padding-top: 20px;
  padding-bottom: 45px;
  color: #2b2b2b;
`;

export default LeaveModal;
