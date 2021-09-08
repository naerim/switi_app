import React from 'react';
import styled from 'styled-components/native';
import { useGoFirstProfile } from '../../../util/navigationHooks';

interface Props {
  success: boolean;
  input: { gender: string; nickname: string; email: string; password: string };
}

const SignupButton: React.FC<Props> = ({ success, input }) => {
  const goFirstProfile = useGoFirstProfile();
  return (
    <Container disabled={!success} onPress={goFirstProfile}>
      <TextStyle>이메일로 가입</TextStyle>
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

export default SignupButton;
