import React from 'react';
import styled from 'styled-components/native';

interface Props {
  resendMail: () => void;
}
const ModalOption: React.FC<Props> = ({ resendMail }) => {
  return (
    <Container>
      <Question>인증번호를 받지 못했나요?</Question>
      <Answer onPress={resendMail}>인증번호 재전송</Answer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
  padding: 0 24px;
`;

const Question = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

const Answer = styled.Text`
  color: #b4b4b4;
  text-decoration: #b4b4b4 underline;
  font-size: 12px;
`;

export default ModalOption;
