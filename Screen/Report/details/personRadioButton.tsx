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
  studyMemberList: any;
}

const PersonRadioButton: React.FC<Props> = ({ input, studyMemberList }) => {
  let value = 0;
  let radioStudyMemberList = studyMemberList[0].studyMembers;
  radioStudyMemberList = radioStudyMemberList?.map((item: any) => ({
    ...item,
    label: item.nickname,
    value: value++,
  }));
  // console.log('radio 스터디 멤버', radioStudyMemberList);
  return (
    <Container>
      <RadioForm>
        {radioStudyMemberList?.map((obj: any, value: number) => (
          <RadioButton labelHorizontal={false} key={value}>
            <RadioContainer>
              <RadioButtonInput
                obj={obj}
                index={value}
                isSelected={input.reason === value}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={
                  input.reason === value ? '#86E3C3' : '#D1D1D1'
                }
                buttonSize={8}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(value) => {
                  input.setReason(value);
                }}
              />
              <Imag />
              <RadioButtonLabel
                obj={obj}
                index={value}
                labelStyle={{ fontSize: 14, color: '#2B2B2B' }}
                labelWrapStyle={{ marginRight: 25 }}
                onPress={(value) => {
                  input.setReason(value);
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
