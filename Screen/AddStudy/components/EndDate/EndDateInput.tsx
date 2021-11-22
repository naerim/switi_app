import React, { useState } from 'react';
import styled from 'styled-components/native';
import CalenderModal from './CalenderModal';

interface Props {
  value: { [key: string]: string };
  setValue: any;
}

const EndDateInput: React.FC<Props> = ({ value, setValue }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  return (
    <Container>
      <TouchArea onPress={onPress}>
        <Year
          pointerEvents="none"
          value={value.year}
          onChangeText={setValue}
          keyboardType="numeric"
          secureTextEntry={false}
          editable={false}
          maxLength={4}
          textAlign="right"
        />
        <Text>년</Text>
        <Date
          pointerEvents="none"
          value={value.month}
          onChangeText={setValue}
          editable={false}
          keyboardType="numeric"
          secureTextEntry={false}
          maxLength={2}
          textAlign="right"
        />
        <Text>월</Text>
        <Date
          pointerEvents="none"
          value={value.day}
          onChangeText={setValue}
          editable={false}
          keyboardType="numeric"
          secureTextEntry={false}
          maxLength={2}
          textAlign="right"
        />
        <Text>일</Text>
      </TouchArea>
      <CalenderModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        setValue={setValue}
        desc="스터디 예정 종료 날짜를 선택 해 주세요."
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

const TouchArea = styled.TouchableOpacity`
  z-index: 1;
  flex-direction: row;
  align-items: center;
`;

const Year = styled.TextInput`
  width: 53px;
  height: 40px;
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
`;

const Date = styled.TextInput`
  width: 37px;
  height: 40px;
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: #e3e3e3;
`;

const Text = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 20px;
`;

export default EndDateInput;
