import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react';

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
}

const AuthInput: React.FC<TextInputInterface> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  returnKeyType,
}) => (
  <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          autoCorrect={false}
        />
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  color: #2b2b2b;
  border-color: #e3e3e3;
  border-radius: 4px;
  padding: 10px;
  height: 40px;
`;

export default AuthInput;
