import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface AuthButtonProps {
  text: string;
  onPress: () => void;
  loading: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  onPress,
  loading = false,
}) => (
  <Touchable disabled={loading} onPress={onPress}>
    <Container>
      {loading ? <ActivityIndicator color={'white'} /> : <Text>{text}</Text>}
    </Container>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  padding: 0 10px;
  margin: 20px 0;
`;

const Container = styled.View`
  width: 100%;
  background-color: #b4b4b4;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 50px;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default AuthButton;
