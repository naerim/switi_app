import React from 'react';
import AuthItem from './AuthItem';

interface Input {
  value: string;
  onChange: (value: string) => void;
}

interface SignInFormProps {
  emailInput: Input;
  passwordInput: Input;
}

const SignInForm: React.FC<SignInFormProps> = ({
  emailInput,
  passwordInput,
}) => (
  <>
    <AuthItem
      title="이메일"
      value={emailInput.value}
      onChangeText={emailInput.onChange}
      placeholder="이메일"
      keyboardType="email-address"
      secureTextEntry={false}
      returnKeyType="next"
    />
    <AuthItem
      title="비밀번호"
      value={passwordInput.value}
      onChangeText={passwordInput.onChange}
      placeholder="비밀번호"
      keyboardType="default"
      secureTextEntry={true}
      returnKeyType="send"
    />
  </>
);

export default SignInForm;
