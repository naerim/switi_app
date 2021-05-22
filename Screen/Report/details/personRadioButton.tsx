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

const PersonRadioButton: React.FC<Props> = ({ input }) => {
  const radio_props = [
    {
      label: '스터디원1(모집장)',
      value: 0,
    },
    {
      label: '스터디원1(모집장)',
      value: 1,
    },
    {
      label: '스터디원1(모집장)',
      value: 2,
    },
    {
      label: '스터디원1(모집장)',
      value: 3,
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
  background-color: #d1d1d1;
  border-radius: 40px;
  margin-right: 5px;
`;
export default PersonRadioButton;
