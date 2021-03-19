import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface AuthButtonProps {
  text: string;
  onPress: () => void;
  loading: boolean;
  color?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  onPress,
  loading = false,
  color,
}) => (
  <Touchable disabled={loading} onPress={onPress}>
    <Container color={color}>
      {loading ? <ActivityIndicator color={'white'} /> : <Text>{text}</Text>}
    </Container>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  padding: 0 10px;
  margin: 20px 0;
`;

const Container = styled.View`
  width: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 50px;
  background-color: ${({ color }: { color?: string }) => color || '#b4b4b4'};
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default AuthButton;
