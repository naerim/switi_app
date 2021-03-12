import React from 'react';
import styled from 'styled-components/native';
import NicknameButton from '../button/NicknameButton';

const NicknameInput = () => {
  return (
    <Container>
      <Input />
      <NicknameButton />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 70%;
  margin-right: 10px;
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

export default NicknameInput;
