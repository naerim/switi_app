import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';

interface Props {
  checked?: string;
}

const MyState = ({ check }) => {
  const itemCheck = (key: string) => {
    check.setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const stateList = [
    {
      title: '대학생',
      checked: check.checked.student,
      onPress: () => itemCheck('student'),
    },
    {
      title: '취준생',
      checked: check.checked.jobSeeker,
      onPress: () => itemCheck('jobSeeker'),
    },
    {
      title: '직장인',
      checked: check.checked.worker,
      onPress: () => itemCheck('worker'),
    },
  ];
  return (
    <ProfileContent title="나의 상황 (복수선택 가능)">
      <Container>
        {stateList.map(({ title, checked, onPress }) => (
          <Button activeOpacity={0.8} key={title} checked={checked} onPress={onPress}>
            <Title checked={checked}>{title}</Title>
          </Button>
        ))}
      </Container>
    </ProfileContent>
  );
};

const Container = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity<Props>`
  border-radius: 20px;
  border-width: 1px;
  padding: 10px;
  width: 30%;
  height: 40px;
  justify-content: center;
  background-color: ${(props) => (props.checked ? '#ffd57a' : '#fff')};
  border-color: ${(props) => (props.checked ? '#ffd57a' : '#e3e3e3')};
`;

const Title = styled.Text<Props>`
  font-size: 12px;
  color: ${(props) => (props.checked ? '#fff' : '#b4b4b4')};
  text-align: center;
`;

export default MyState;
