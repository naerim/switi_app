import React from 'react';
import styled from 'styled-components/native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
interface InputProps {
  reason: number;
  setReason: (value: number) => void;
}
interface Props {
  input: InputProps;
  studyInProgressList: [];
}

const StudyRadioButton: React.FC<Props> = ({ input, studyInProgressList }) => {
  const radio_props = [
    {
      label: '중국어 부수는 모임',
      value: 0,
    },
    {
      label: '중국어 부수는 모임',
      value: 1,
    },
  ];

  return (
    <Container>
      <RadioForm>
        {studyInProgressList?.map((obj, i) => (
          <RadioButton labelHorizontal={false} key={i}>
            <RadioContainer>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={input.reason === i}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={input.reason === i ? '#86E3C3' : '#D1D1D1'}
                buttonSize={8}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(v) => {
                  input.setReason(v);
                }}
              />
              <Imag />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelStyle={{ fontSize: 14, color: '#2B2B2B' }}
                labelWrapStyle={{ marginRight: 25 }}
                onPress={(v) => {
                  input.setReason(v);
                }}
              />
            </RadioContainer>
          </RadioButton>
        ))}
      </RadioForm>
    </Container>
  );
};

const Container = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Imag = styled.View`
  height: 40px;
  width: 40px;
  background-color: #e3e3e3;
  border-radius: 10px;
  margin-right: 5px;
`;
export default StudyRadioButton;
