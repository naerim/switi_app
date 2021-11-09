import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  checkedValue: null | number;
  setChecked: (func: any) => void;
  name: string;
}

const radios = [
  { id: 1, number: 1, text: '매우 아니다' },
  { id: 2, number: 2, text: '아니다' },
  { id: 3, number: 3, text: '보통이다' },
  { id: 4, number: 4, text: '그렇다' },
  { id: 5, number: 5, text: '매우 그렇다' },
];

type ObjType = {
  [index: string]: string;
  participation: string;
};

const titleMapper: ObjType = {
  participation: '참여도',
};

const EvaluationRadio: React.FC<Props> = ({
  title,
  checkedValue,
  setChecked,
  name,
}) => (
  <EvaluationContainer>
    <Text>{titleMapper[title]}</Text>
    <Question>{name}님은 스터디에 성실히 참여했나요?</Question>
    <RadioContainer>
      <Line></Line>
      {radios.map(({ id, number, text }) => (
        <RadioItem key={id}>
          <Number>{number}</Number>
          <RadioButton
            checked={id === checkedValue}
            onPress={() =>
              setChecked((checked: any) => ({
                ...checked,
                participation: id,
              }))
            }
          >
            <Check></Check>
          </RadioButton>
          <Number>{text}</Number>
        </RadioItem>
      ))}
    </RadioContainer>
  </EvaluationContainer>
);

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

const Line = styled.View`
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #e3e3e3;
  top: 42%;
`;

const RadioItem = styled.View`
  flex-direction: column;
  align-items: center;
`;

const RadioButton = styled.TouchableOpacity<{ checked: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ checked }) => (checked ? '#86e3c3' : '#fff')};
  border: ${({ checked }) =>
    checked ? '1px solid #86e3c3' : '1px solid #b4b4b4'};
`;

const Check = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 1px solid white;
`;

const Number = styled.Text`
  width: 60px;
  height: 12px;
  color: #b4b4b4;
  font-size: 10px;
  text-align: center;
  margin-bottom: 8px;
`;

export default EvaluationRadio;
