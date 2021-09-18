import React from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import styled from 'styled-components/native';

interface InputProps {
  onlineFlag: number;
  setOnlineFlag: (value: number) => void;
}

interface Props {
  title: string;
  input: InputProps;
}

const FlagRadioButton: React.FC<Props> = ({ title, input }) => {
  const radio_props = [
    { label: '온라인', value: 0 },
    { label: '오프라인', value: 1 },
  ];

  return (
    <Container>
      <Title>{title}</Title>
      <RadioForm formHorizontal={true}>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={input.onlineFlag === i}
              buttonInnerColor={'#86E3C3'}
              buttonOuterColor={input.onlineFlag === i ? '#86E3C3' : '#D1D1D1'}
              buttonSize={8}
              buttonWrapStyle={{ marginRight: 5, marginTop: 1 }}
              onPress={(v) => {
                input.setOnlineFlag(v);
              }}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelStyle={{ fontSize: 11, color: '#2B2B2B' }}
              labelWrapStyle={{ marginRight: 25 }}
              onPress={(v) => {
                input.setOnlineFlag(v);
              }}
            />
          </RadioButton>
        ))}
      </RadioForm>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  padding-bottom: 2%;
`;

export default FlagRadioButton;
