import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface AuthButtonProps {
  text: string;
  onPress: () => void;
  loading: boolean;
  color?: string;
  textColor?: string;
}

const TwoButton: React.FC<AuthButtonProps> = ({
  text,
  onPress,
  loading = false,
  color,
  textColor,
}) => (
  <Touchable disabled={loading} onPress={onPress}>
    <Container color={color}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text color={textColor}>{text}</Text>
      )}
    </Container>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  width: 180px;
`;

const Container = styled.View`
  width: 100%;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }: { color?: string }) => color || '#E3E3E3'};
`;

const Text = styled.Text`
  color: ${({ color }: { color?: string }) => color || '#B4B4B4'};
  text-align: center;
  font-weight: 600;
`;

export default TwoButton;
