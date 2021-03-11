import React, { useState } from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const GenderRadioButton = () => {
  const [radio, setRadio] = useState(0);
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
            isSelected={radio === i}
            buttonInnerColor={'#D1D1D1'}
            buttonOuterColor={'#D1D1D1'}
            buttonSize={14}
            buttonWrapStyle={{ marginRight: 5, marginBottom: 20 }}
            onPress={(v) => {
              setRadio(v);
            }}
          />
          <RadioButtonLabel
            obj={obj}
            index={i}
            labelStyle={{ fontSize: 12, color: '#2B2B2B' }}
            labelWrapStyle={{ marginRight: 20, marginBottom: 20 }}
            onPress={(v) => {
              setRadio(v);
            }}
          />
        </RadioButton>
      ))}
    </RadioForm>
  );
};

export default GenderRadioButton;
