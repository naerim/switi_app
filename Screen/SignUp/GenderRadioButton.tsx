import React from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

interface InputProps {
  gender: number;
  setGender: (value: number) => void;
}

interface Props {
  input: InputProps;
}

const GenderRadioButton: React.FC<Props> = ({ input }) => {
  const radio_props = [
    { label: '남', value: 0 },
    { label: '여', value: 1 },
  ];
  return (
    <RadioForm formHorizontal={true}>
      {radio_props.map((obj, i) => (
        <RadioButton labelHorizontal={true} key={i}>
          <RadioButtonInput
            obj={obj}
            index={i}
            isSelected={input.gender === i}
            buttonInnerColor={'#D1D1D1'}
            buttonOuterColor={'#D1D1D1'}
            buttonSize={14}
            buttonWrapStyle={{ marginRight: 5 }}
            onPress={(v) => {
              input.setGender(v);
            }}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelStyle={{ fontSize: 12, color: '#2B2B2B' }}
            labelWrapStyle={{ marginRight: 20 }}
            onPress={(v) => {
              input.setGender(v);
            }}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default GenderRadioButton;
