import React from 'react';
import styled from 'styled-components/native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { shallowEqual, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
interface InputProps {
  reason: number;
  setReason: (value: number) => void;
}
interface Props {
  input: InputProps;
  studyInProgressList: any;
}

const StudyRadioButton: React.FC<Props> = ({ input, studyInProgressList }) => {
  const radio_props = [
    {
      label: '중국어 부수는 모임',
      value: 0,
    },
    {
      label: '중국어 뿌수는 모임',
      value: 1,
    },
  ];
  let value = 0;
  const radioStudyList = studyInProgressList?.map((item: any) => ({
    ...item,
    label: item.title,
    value: value++,
  }));

  console.log(`현재 진행중인스터디  Radio`, radioStudyList);

  return (
    <Container>
      <RadioForm>
        {radioStudyList?.map((object: any, id: number) => (
          <RadioButton labelHorizontal={false} key={id}>
            <RadioContainer>
              <RadioButtonInput
                obj={object}
                index={id}
                isSelected={input.reason === id}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={input.reason === id ? '#86E3C3' : '#D1D1D1'}
                buttonSize={8}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(v) => {
                  input.setReason(v);
                }}
              />
              <Imag />
              <RadioButtonLabel
                obj={object}
                index={id}
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
