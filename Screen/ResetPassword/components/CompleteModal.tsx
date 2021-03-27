import React from 'react';
import styled from 'styled-components/native';
import BasicModal from '../../../Component/BasicModal';
import CompleteIcon from '../../../Img/icon_complete.png';
import { ModalProps } from '../interface';

const CompleteModal: React.FC<ModalProps> = ({ modalVisible, closeModal }) => (
  <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
    <BigText>비밀번호 재설정이 완료되었습니다!</BigText>
    <SmallText>새로운 비밀번호로 시작해주세요:)</SmallText>
    <IconWrap>
      <Icon source={CompleteIcon} />
    </IconWrap>
  </BasicModal>
);

const BigText = styled.Text`
  margin-top: 40px;
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;
`;

const SmallText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #2b2b2b;
  margin: 20px 0;
`;

const IconWrap = styled.View`
  align-items: center;
  margin: 10px 0;
`;

const Icon = styled.Image``;

export default CompleteModal;
