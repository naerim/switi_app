import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';

const InterestArea = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <ProfileContent title="관심지역 (3개 이하 선택)">
      <SelectButton onPress={onPress} />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <Test>hi</Test>
      </BasicModal>
    </ProfileContent>
  );
};

const Test = styled.Text`
  font-size: 12px;
`;
export default InterestArea;
