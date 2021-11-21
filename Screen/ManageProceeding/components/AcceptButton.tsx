import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  display: boolean;
  onPress?: () => void;
}

interface ButtonProps {
  display: boolean;
}

const AcceptButton: React.FC<Props> = ({ title, display, onPress }) => {
  return (
    <Container activeOpacity={0.8} display={display} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity<ButtonProps>`
  margin-top: 18px;
  background-color: #86e3c3;
  border-radius: 20px;
  align-items: center;
  width: ${(props) => (props.display ? '65px' : '0px')};
  padding: ${(props) => (props.display ? '10px' : '0px')};
`;

const Title = styled.Text`
  color: white;
  font-size: 11px;
`;

export default AcceptButton;
