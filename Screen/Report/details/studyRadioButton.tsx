import React from 'react';
import styled from 'styled-components/native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
interface InputProps {
  choice: number;
  setChoice: (value: number, studyId: number) => void;
}
interface Props {
  input: InputProps;
  studyInProgressList: any;
}

const StudyRadioButton: React.FC<Props> = ({ input, studyInProgressList }) => {
  let value = 0;
  const radioStudyList = studyInProgressList?.map((item: any) => ({
    ...item,
    label: item.title,
    // value: item.id,
    value: value++,
    // 왜 id 하면 안될까? value 는 꼭 0++이어야 하나..
  }));
  return (
    <Container>
      <RadioForm>
        {radioStudyList?.map((object: any, value: number) => (
          <RadioButton labelHorizontal={false} key={value}>
            <RadioContainer>
              {/*{console.log('value', value)}*/}
              <RadioButtonInput
                obj={object}
                index={value}
                isSelected={input.choice === value}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={
                  input.choice === value ? '#86E3C3' : '#D1D1D1'
                }
                buttonSize={8}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(value) => {
                  input.setChoice(value, object.id);
                  console.log(object.id);
                }}
              />
              <Imag />
              <RadioButtonLabel
                obj={object}
                index={value}
                labelStyle={{ fontSize: 14, color: '#2B2B2B' }}
                labelWrapStyle={{ marginRight: 25 }}
                onPress={(value) => {
                  input.setChoice(value, object.id);
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
