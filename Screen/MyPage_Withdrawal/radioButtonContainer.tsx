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

const RadioButtonContainer: React.FC<Props> = ({ input }) => {
  const radio_props = [
    {
      label: '자주 사용하지 않아요',
      value: 0,
    },
    {
      label: '이용이 불편해요',
      value: 1,
    },
    {
      label: '시스템 오류가 잦아요',
      value: 2,
    },
    {
      label: '스터디 모집이 어려워요',
      value: 3,
    },
    {
      label: '새 계정으로 다시 이용하고 싶어요',
      value: 4,
    },
    {
      label: '기타 (직접작성)',
      value: 5,
    },
  ];

  // const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
  //   radioButtonsData
  // );
  //
  // function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
  //   setRadioButtons(radioButtonsArray);
  // }

  return (
    <Container>
      <RadioForm>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i}>
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

export default RadioButtonContainer;
