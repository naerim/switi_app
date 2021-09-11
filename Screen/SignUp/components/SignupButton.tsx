import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useGoFirstProfile } from '../../../util/navigationHooks';
import { useDispatch } from 'react-redux';
import { signupRequest } from '../../../redux/userReducer';

interface Props {
  success: boolean;
  input: { gender: number; nickname: string; email: string; password: string };
}

const SignupButton: React.FC<Props> = ({ success, input }) => {
  const goFirstProfile = useGoFirstProfile();
  const dispatch = useDispatch();
  // 회원가입
  const onSignup = useCallback(
    (gender, nickname, email, password) =>
      dispatch(signupRequest(gender, nickname, email, password)),
    [dispatch]
  );

  const onPress = () => {
    onSignup(input.gender, input.nickname, input.email, input.password);
  };

  return (
    <Container disabled={!success} onPress={onPress}>
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
