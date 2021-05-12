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
}

const StudyRadioButton: React.FC<Props> = ({ input }) => {
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
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={false} key={i}>
            <RadioContainer>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={input.reason === i}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={input.reason === i ? '#86E3C3' : '#D1D1D1'}
                buttonSize={10}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(v) => {
                  input.setReason(v);
                }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelStyle={{ fontSize: 12, color: '#2B2B2B' }}
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
  flex: 5;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

const RadioContainer = styled.View`
  flex-direction: row;
`;

export default StudyRadioButton;
