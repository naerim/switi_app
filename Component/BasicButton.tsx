import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  loading?: boolean;
}

interface LoadingProps {
  loading?: boolean;
}

const BasicButton: React.FC<Props> = ({ text, onPress, loading = false }) => (
  <Container disabled={loading} loading={loading} onPress={onPress}>
    {loading ? <ActivityIndicator color="white" /> : <Text>{text}</Text>}
  </Container>
);

const Container = styled.TouchableOpacity<LoadingProps>`
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.loading ? '#b4b4b4' : '#86E3C3')};
`;

const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default BasicButton;
