import React from 'react';
import styled from 'styled-components/native';
import { useGoFirstProfile } from '../../../util/navigationHooks';
import axios from 'axios';

interface Props {
  success: boolean;
  input: { gender: number; nickname: string; email: string; password: string };
}

const SignupButton: React.FC<Props> = ({ success, input }) => {
  const goFirstProfile = useGoFirstProfile(input.nickname);

  // 회원가입
  const onPress = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/auth/signup',
      data: {
        gender: input.gender,
        nickname: input.nickname,
        email: input.email,
        password: input.password,
      },
    })
      .then((res) => {
        console.log('회원가입 성공');
        console.log(input.nickname);
        goFirstProfile();
      })
      .catch((err) => {
        if (err.message == 'Request failed with status code 400')
          alert('이미 존재하는 이메일입니다.');
        else alert('회원가입 실패');
      });
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
