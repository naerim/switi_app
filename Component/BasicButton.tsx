import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

interface LoadingProps {
  loading?: boolean;
}

const BasicButton: React.FC<Props> = ({
  text,
  onPress,
  loading = false,
  disabled,
}) => (
  <Container disabled={disabled} loading={loading} onPress={onPress}>
    {loading ? <ActivityIndicator color="white" /> : <Text>{text}</Text>}
  </Container>
);

const Container = styled.TouchableOpacity<LoadingProps>`
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#b4b4b4' : '#86E3C3')};
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default BasicButton;
