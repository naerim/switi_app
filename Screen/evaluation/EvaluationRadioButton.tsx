import React, { useState } from 'react';
import styled from 'styled-components/native';

const EvaluationRadioButton = () => {
  const [radios, setRadios] = useState([
    { number: 1, text: '매우 아니다', on: 0 },
    { number: 2, text: '아니다', on: 0 },
    { number: 3, text: '보통이다', on: 0 },
    { number: 4, text: '그렇다', on: 0 },
    { number: 5, text: '매우 그렇다', on: 1 },
  ]);

  return (
    <EvaluationContainer>
      <Text>참여도</Text>
      <Question>@@님은 스터디에 성실히 참여했나요?</Question>
      <RadioContainer>
        {radios.map((radio) => (
          <RadioItem>
            <Number>{radio.number}</Number>
            {radio.on ? (
              <RadioButtonCheck>
                <Check></Check>
              </RadioButtonCheck>
            ) : (
              <RadioButton></RadioButton>
            )}
            <Number>{radio.text}</Number>
          </RadioItem>
        ))}
      </RadioContainer>
    </EvaluationContainer>
  );
};

const Text = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const EvaluationContainer = styled.View`
  margin-bottom: 30px;
`;

const Question = styled.Text`
  margin: 5px 0;
  font-size: 14px;
`;

const RadioContainer = styled.View`
  margin: 15px 0;
  flex-direction: row;
  justify-content: space-around;
`;

const RadioItem = styled.View`
  flex-direction: column;
  align-items: center;
`;

const RadioButton = styled.TouchableOpacity`
  border: 1px solid #b4b4b4;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const RadioButtonCheck = styled.TouchableOpacity`
  background-color: #86e3c3;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Check = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 1px solid white;
`;

const NumberContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

const Number = styled.Text`
  width: 60px;
  height: 12px;
  color: #b4b4b4;
  font-size: 10px;
  text-align: center;
  margin-bottom: 8px;
`;

export default EvaluationRadioButton;
