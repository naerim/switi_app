import React, { useEffect, useState } from 'react';
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
  setReportMemberId: (memberId: number) => void;
  input: InputProps;
  propsStudyMemberList: any;
}

const PersonRadioButton: React.FC<Props> = ({
  setReportMemberId,
  input,
  propsStudyMemberList,
}) => {
  const [member, setMember] = useState([]);
  const { studyInProgressList, studyMemberList } = useSelector(
    (state: rootState) => ({
      studyInProgressList: state.reportReducer.studyInProgressList,
      studyMemberList: state.reportReducer.studyMemberList,
    }),
    shallowEqual
  );

  const refreshRadioStudyMember = () => {
    let value = 0;
    const radioStudyMemberList = propsStudyMemberList?.map((item: any) => ({
      ...item,
      label: item.nickname,
      value: value++,
    }));
    setMember(radioStudyMemberList);
    // console.log('radio 스터디 멤버', radioStudyMemberList);
  };

  useEffect(() => {
    refreshRadioStudyMember();
  }, [studyMemberList]);

  return (
    <Container>
      <RadioForm>
        {member?.map((object: any, value: number) => (
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
                  setReportMemberId(object.id);
                  input.setReason(value);
                }}
              />
              <Imag />
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

const Imag = styled.View`
  height: 40px;
  width: 40px;
  background-color: #d1d1d1;
  border-radius: 40px;
  margin-right: 5px;
`;
export default PersonRadioButton;
