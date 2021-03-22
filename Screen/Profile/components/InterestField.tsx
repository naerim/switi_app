import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import { FlatList, TouchableOpacity, Text } from 'react-native';

const Data = [
  {
    id: 1,
    name: '노란색',
  },
  {
    id: 2,
    name: '빨간색',
  },
  {
    id: 3,
    name: '파란색',
  },
];

const InterestField = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <ProfileContent title="관심분야 (3개 이하 선택)">
      <SelectButton onPress={onPress} />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(item.name)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </BasicModal>
    </ProfileContent>
  );
};

export default InterestField;
