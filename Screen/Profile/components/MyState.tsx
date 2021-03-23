import React from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';

const MyState = () => {
  return (
    <ProfileContent title="나의 상황 (복수선택 가능)">
      <Container>
        <Button>
          <Title>대학생</Title>
        </Button>
        <Button>
          <Title>취준생</Title>
        </Button>
        <Button>
          <Title>직장인</Title>
        </Button>
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

const Button = styled.TouchableOpacity`
  border-radius: 20px;
  border-color: #e3e3e3;
  border-width: 1px;
  padding: 10px;
  width: 30%;
  height: 40px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  text-align: center;
`;

export default MyState;
