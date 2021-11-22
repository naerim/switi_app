import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components/native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import profileImg from '../../../Img/icon_profile.png';

interface InputProps {
  reason: number;
  setReason: (value: number) => void;
}
interface Props {
  setReportMemberId: Dispatch<SetStateAction<undefined>>;
  input: InputProps;
  studyMemberList: any;
}

const PersonRadioButton: React.FC<Props> = ({
  setReportMemberId,
  input,
  studyMemberList,
}) => {
  let value = 0;
  let radioStudyMemberList = studyMemberList[0]?.studyMembers;
  radioStudyMemberList = radioStudyMemberList?.map((item: any) => ({
    ...item,
    label: item.nickname,
    value: value++,
  }));
  return (
    <Container>
      <RadioForm>
        {radioStudyMemberList?.map((object: any, value: number) => (
          <RadioButton labelHorizontal={false} key={value}>
            <RadioContainer>
              <RadioButtonInput
                obj={object}
                index={value}
                isSelected={input.reason === value}
                buttonInnerColor={'#86E3C3'}
                buttonOuterColor={
                  input.reason === value ? '#86E3C3' : '#D1D1D1'
                }
                buttonSize={8}
                buttonWrapStyle={{ marginRight: 5 }}
                onPress={(value) => {
                  console.log(object.label, 'object.label');
                  setReportMemberId(object.id);
                  input.setReason(value);
                }}
              />
              <Img source={profileImg} />
              <RadioButtonLabel
                obj={object}
                index={value}
                labelStyle={{ fontSize: 14, color: '#2B2B2B' }}
                labelWrapStyle={{ marginRight: 25 }}
                onPress={(value) => {
                  setReportMemberId(object.id);
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

const Img = styled.Image`
  width: 34px;
  height: 34px;
  margin-right: 5px;
`;
export default PersonRadioButton;
