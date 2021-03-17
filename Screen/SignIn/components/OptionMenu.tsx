import React from 'react';
import styled from 'styled-components/native';
import { useGoSignUp } from '../../../util/navigationHooks';

const OptionMenu = () => {
  const goSignUp = useGoSignUp();
  return (
    <Container>
      <ItemContainer>
        <Question>아직 스위티 회원이 아니신가요?</Question>
        <Answer onPress={() => goSignUp()}>회원가입</Answer>
      </ItemContainer>
      <ItemContainer>
        <Question>혹시 비밀번호를 잊으셨나요?</Question>
        <Answer>비밀번호 찾기</Answer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const Question = styled.Text`
  font-weight: bold;
`;

const Answer = styled.Text`
  text-decoration: underline;
`;

export default OptionMenu;
