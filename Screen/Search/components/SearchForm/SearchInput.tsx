import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../image/search.png';

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
    <SearchIcon source={Icon} />
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
  background-color: #f3f3f3;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  height: 30px;
`;

const SearchIcon = styled.Image`
  height: 16px;
  width: 16px;
  margin-right: 6px;
  margin-left: 3px;
`;

const TextInput = styled.TextInput`
  color: #2b2b2b;
  padding: 7px;
  font-size: 12px;
`;

export default SearchInput;
