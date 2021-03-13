import React from 'react';
import styled from 'styled-components/native';

const EmailInput = () => {
  return (
    <Container>
      <Input />
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
`;

const Input = styled.TextInput`
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
`;

export default EmailInput;
