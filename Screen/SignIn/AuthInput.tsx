import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

const Container = styled.View`
  margin-bottom: 10px;
`;

// const TextInput = styled.TextInput`
//   width: 100%;
//   border-width: 1px;
//   color: #2b2b2b;
//   border-color: #e3e3e3;
//   border-radius: 4px;
//   padding: 10px;
// `;

interface AuthInputProps {
  placeholder: string;
  value: any;
  keyboardType: string;
  autoCapitalize: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  value,
  keyboardType = 'default',
  autoCapitalize = 'none',
}) => (
  <Container>
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      onChangeText={() => null}
      value={value}
    />
    {/* TextInput 해결하기 */}
  </Container>
);

export default AuthInput;
