import React from 'react';
import styled from 'styled-components/native';

interface Props {
  value: string;
  check: (value: string) => void;
}

const NicknameButton: React.FC<Props> = ({ value, check }) => {
  const special = /[~!@#$%^&*()_+|<>?:{}]/;
  const checkNickname = (value: string) => {
    if (value == '' || value == null) {
      return '닉네임 입력은 필수';
    } else if (special.test(value) || value.search(/\s/) != -1) {
      return '공백, 특수문자는 사용 불가합니다.';
    }
  };
  return (
    <Container>
      <ButtonText
        onPress={() => {
          console.log(value);
          check('ddd');
        }}
      >
        중복확인
      </ButtonText>
    </Container>
  );
};

const Container = styled.View`
  width: 25%;
  background-color: #b4b4b4;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
`;

export default NicknameButton;
