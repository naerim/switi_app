import React, { useState } from 'react';
import styled from 'styled-components/native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: '자주 사용하지 않아요',
    value: 'option1',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
  {
    id: '2',
    label: '이용이 불편해요',
    value: 'option2',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
  {
    id: '3',
    label: '시스템 오류가 잦아요',
    value: 'option2',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
  {
    id: '4',
    label: '스터디 모집이 어려워요',
    value: 'option2',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
  {
    id: '5',
    label: '새 계정으로 다시 이용하고 싶어요',
    value: 'option2',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
  {
    id: '6',
    label: '기타 (직접작성)',
    value: 'option2',
    containerStyle: { alignItems: 'left' },
    size: 20,
  },
];

const RadioButtonContainer = () => {
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
    radioButtonsData
  );

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <Container>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </Container>
  );
};

const Container = styled.View``;
const Radio = styled.View`
  background-color: pink;
`;
export default RadioButtonContainer;
