import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useGoFirstProfile } from '../../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../../../redux/userReducer';
import { rootState } from '../../../redux';

interface Props {
  success: boolean;
  input: { gender: number; nickname: string; email: string; password: string };
}

const SignupButton: React.FC<Props> = ({ success, input }) => {
  const goFirstProfile = useGoFirstProfile();
  const { signup, signupError } = useSelector(
    (state: rootState) => state.userReducer
  );
  const dispatch = useDispatch();

  // 회원가입
  const onPress = () => {
    dispatch(
      signupRequest(input.gender, input.nickname, input.email, input.password)
    );
    console.log(signupError);
    if (signupError) alert('이미 존재하는 이메일입니다.');
    else if (signup) goFirstProfile();
    // 에러 생김
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
