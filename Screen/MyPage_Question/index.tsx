import React, { useState } from 'react';
import styled from 'styled-components/native';
import UserInfoContainer from '../MyPage_UserInfo/userInfoContainer';
import { useGoMyPage } from '../../util/navigationHooks';
import useInput from '../SignIn/util/useInput';
import SubmitButton from '../MyPage_FixUserInfo/submitButton';
import axios from 'axios';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const MyPage_Question = () => {
  const titleInput = useInput('');
  const contentInput = useInput('');
  const checkSuccess = () => {
    if (titleInput.value !== '' && contentInput.value !== '') {
      return true;
    } else return false;
  };
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const success = checkSuccess();
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = () => {
    console.log('onPress Question');
    setIsLoading(true);
    axios({
      method: 'post',
      url: 'http://localhost:4000/question/sendMail',
      headers: { Authorization: login.token },
      data: {
        title: titleInput.value,
        contents: contentInput.value,
      },
    })
      .then((response) => {
        setIsLoading(false);
        console.log('response Question', response.status);
        Alert.alert('문의가 전송되었습니다. ');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('err Question', err);
        Alert.alert('네트워크 오류 :(');
      });
  };

  return (
    <UserInfoContainer headerTitle="문의" display onPress={useGoMyPage()}>
      <Content>
        <ShortSection>
          <Title>받는 사람</Title>
          <SwitiMail>Example@gmail.com</SwitiMail>
        </ShortSection>
        <Line />
        <ShortSection>
          <Title>제목</Title>
          <Input
            value={titleInput.value}
            onChangeText={titleInput.onChange}
            placeholder="제목을 입력하세요"
          />
        </ShortSection>
        <Line />
        <ShortSection>
          <Title>문의 내용</Title>
          <Input
            placeholder="내용을 입력하세요"
            value={contentInput.value}
            onChangeText={contentInput.onChange}
            multiline={true}
            textAlignVertical="top"
          />
        </ShortSection>
      </Content>
      <ButtonContainer>
        <SubmitButton
          success={success}
          title="저장하기"
          onPress={handleSend}
          loading={isLoading}
        />
      </ButtonContainer>
    </UserInfoContainer>
  );
};
const Content = styled.ScrollView`
  margin: 0 24px;
  flex: 12;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  width: 80px;
`;

const SwitiMail = styled.Text`
  font-size: 12px;
`;

const ShortSection = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: #f3f3f3;
`;

const Input = styled.TextInput`
  color: #2b2b2b;
  font-size: 12px;
  padding: 0;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 24px;
  margin-right: 24px;
`;

export default MyPage_Question;
