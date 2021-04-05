import React from 'react';
import styled from 'styled-components/native';

interface Props {
  success: boolean;
  input: { nickname: string; email: string; password: string };
}

const FixButton: React.FC<Props> = ({ success, input }) => {
  return (
    <Container disabled={success}>
      <TextStyle>저장하기</TextStyle>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => (props.disabled ? '#dcdcdc' : '#4fd5a7')};
`;

const TextStyle = styled.Text`
  font-size: 15px;
  color: white;
`;

export default FixButton;
