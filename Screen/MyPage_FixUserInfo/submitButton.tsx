import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

interface Props {
  success: any;
  onPress?: () => void;
  loading?: boolean;
  title?: string;
}

interface LoadingProps {
  loading?: boolean;
}

const SubmitButton: React.FC<Props> = ({
  success,
  onPress,
  title,
  loading,
}) => {
  return (
    <Container
      disabled={!success || loading}
      loading={loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <TextStyle>{title}</TextStyle>
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity<LoadingProps>`
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#b4b4b4' : '#86E3C3')};
`;

const TextStyle = styled.Text`
  font-size: 15px;
  color: white;
`;

export default SubmitButton;
