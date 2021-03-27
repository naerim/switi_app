import React from 'react';
import styled from 'styled-components/native';
// import icon from '../../record/image/search.png;->에

export interface TextInputInterface {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  secureTextEntry: boolean;
  returnKeyType: 'done' | 'go' | 'next' | 'search' | 'send';
  onPress: () => void;
}

const SearchInput: React.FC<TextInputInterface> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  onPress,
}) => (
  <Container>
    <SearchIcon source={require('../../image/search.png')} />
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      returnKeyType={returnKeyType}
      autoCorrect={false}
      onSubmitEditing={onPress}
    />
  </Container>
);

const Container = styled.View`
  margin-bottom: 10px;
  background-color: #e3e3e3;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
`;

const SearchIcon = styled.Image`
  height: 16px;
  width: 16px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  color: #2b2b2b;
  padding: 7px;
`;

export default SearchInput;
