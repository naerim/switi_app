import React, { useState } from 'react';
import styled from 'styled-components/native';
import NicknameButton from '../../SignUp/components/Nickname/NicknameButton';
import { InputProps, Status } from '../../SignUp/inteface';
import { Alert } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

const getColor = ({ status }: { status: Status }) => {
  switch (status) {
    case Status.NORMARL:
      return '#e3e3e3';
    case Status.SUCCESS:
      return '#4fd5a7';
    case Status.ERROR:
      return '#ff0000';
    default:
      return '#e3e3e3';
  }
};

const NicknameContainer: React.FC<InputProps> = ({ input, error, confirm }) => {
  const [message, setMessage] = useState(' ');
  const { myPage } = useSelector(({ userReducer }: rootState) => ({
    myPage: userReducer.myPage,
  }));
  const onChange = (state: boolean) => {
    error.status == 'SUCCESS' &&
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth/checkNickname',
        data: { nickname: input.value },
      })
        .then(() => {
          error.text = '멋진 닉네임이네요!';
          setMessage(error.text);
          confirm?.setConfirm(state);
        })
        .catch((err) => {
          console.log(err);
          error.text = '이미 사용중이거나 탈퇴한 닉네임입니다.';
          error.status = Status.ERROR;
          setMessage(error.text);
          Alert.alert(error.text);
        });
  };

  return (
    <Container>
      <InputContainer>
        <Input
          value={input.value}
          onChangeText={input.onChange}
          placeholder={myPage.myPage.nickname}
          placeholderTextColor="#B4B4B4"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={false}
          status={error.status}
          editable={message !== '멋진 닉네임이네요!'}
        />
        <NicknameButton
          check={() => onChange(true)}
          disabled={message === '멋진 닉네임이네요!'}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  flex: 1;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  font-size: 12px;
  width: 70%;
  margin-right: 10px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${getColor};
  margin-top: 5px;
`;

export default NicknameContainer;
