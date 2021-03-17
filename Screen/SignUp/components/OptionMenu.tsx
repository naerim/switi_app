import React from 'react';
import styled from 'styled-components/native';
import { useGoSignIn } from '../../../util/navigationHooks';

const OptionMenu = () => {
  const goLogin = useGoSignIn();
  return (
    <Container>
      <Question>이미 회원이세요? </Question>
      <Answer onPress={goLogin}>로그인하기</Answer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding-top: 15px;
  justify-content: center;
  align-items: center;
`;

const Question = styled.Text`
  font-size: 12px;
`;

const Answer = styled.Text`
  font-size: 12px;
  text-decoration: underline;
`;

export default OptionMenu;
