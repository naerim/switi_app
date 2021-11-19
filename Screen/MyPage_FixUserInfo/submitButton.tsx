import React from 'react';
import styled from 'styled-components/native';

interface Props {
  success: any;
  onPress?: () => void;
  title?: string;
}

const SubmitButton: React.FC<Props> = ({ success, onPress, title }) => {
  return (
    <Container disabled={!success} onPress={onPress}>
      <TextStyle>{title}</TextStyle>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => (props.disabled ? '#dcdcdc' : '#4fd5a7')};
`;

const TextStyle = styled.Text`
  font-size: 15px;
  color: white;
`;

export default SubmitButton;
