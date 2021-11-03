import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onPress: () => void;
  accept: boolean;
}

interface AcceptProps {
  accept: boolean;
}

const TwoButton: React.FC<Props> = ({ title, onPress, accept }) => (
  <Container onPress={onPress} accept={accept}>
    <Title accept={accept}>{title}</Title>
  </Container>
);

const Container = styled.TouchableOpacity<AcceptProps>`
  border-radius: 32px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => (props.accept ? '#86E3C3' : '#EEEEEE')};
  margin-right: ${(props) => (props.accept ? '0' : '5px')};
  margin-left: ${(props) => (props.accept ? '5px' : '0')};
`;

const Title = styled.Text<AcceptProps>`
  font-size: 14px;
  color: ${(props) => (props.accept ? '#ffffff' : '#b4b4b4')};
`;

export default TwoButton;
