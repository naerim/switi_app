import React from 'react';
import { Text, Button, View } from 'react-native';
import styled from 'styled-components/native';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';
import BasicHeader from '../../Component/BasicHeader';
import {
  NickNameInput,
  EmailInput,
  PasswordInput,
} from '../../Component/AuthInput';
import EmailButton from '../../Component/EmailButton';
import GenderRadioButton from '../../Component/GenderRadioButton';
import AgreeCheckBox from '../../Component/AgreeCheckBox';

interface ContentProps {
  flex: number;
}

const SignUp = () => {
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();
  return (
    <Wrap>
      <BasicHeader title="회원가입" />
      <Container>
        <Content flex={1}>
          <Title>성별</Title>
          <GenderRadioButton />
        </Content>

        <Content flex={1}>
          <Title>닉네임</Title>
          <NickNameView>
            <NickNameInput />
            <EmailButton />
          </NickNameView>
        </Content>
        <Text></Text>

        <Content flex={1}>
          <Title>이메일</Title>
          <EmailInput />
        </Content>
        <Text></Text>

        <Content flex={1}>
          <Title>비밀번호 (8자리 이상 영문, 숫자, 특수문자)</Title>
          <PasswordInput />
        </Content>
        <Text></Text>

        <Content flex={1}>
          <Title>비밀번호 확인</Title>
          <PasswordInput />
        </Content>
        <Text></Text>

        <Content flex={2}>
          <AgreeCheckBox />
        </Content>

        <Content flex={2}>
          <Button title="가입하기" onPress={goFirstProfile}/>
          <Text onPress={goLogin}>로그인하기</Text>
        </Content>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  margin: 0 24px;
  background-color: #fff;
`;

const Content = styled.View`
  flex: ${(props: ContentProps) => (props.flex ? props.flex : 1)};
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
`;

const NickNameView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default SignUp;
