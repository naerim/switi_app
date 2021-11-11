import React from 'react';
import styled from 'styled-components/native';

interface Props {
  prev: number;
}
const WithdrawButton: React.FC<Props> = ({ prev }) => {
  return (
    <Container prev={prev}>
      <Title>탈퇴시키기</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity<Props>`
  width: ${(props) => (props.prev ? 0 : '62px')};
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #86e3c3;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 11px;
  color: #ffffff;
`;

export default WithdrawButton;
