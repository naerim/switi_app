import React from 'react';
import styled from 'styled-components/native';
import { useGoFirstProfile } from '../../util/navigationHooks';

const SignupButton = () => {
  const goFirstProfile = useGoFirstProfile();
  return (
    <Container onPress={goFirstProfile}>
      <TextStyle>이메일로 가입</TextStyle>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #000;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 30%;
`;

const TextStyle = styled.Text`
  font-size: 15px;
  color: white;
`;

export default SignupButton;
