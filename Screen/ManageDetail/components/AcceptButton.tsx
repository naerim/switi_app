import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const AcceptButton: React.FC<Props> = ({ title }) => {
  return (
    <Container activeOpacity={0.8}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #86e3c3;
  border-radius: 20px;
  padding: 10px;
  width: 62px;
  align-items: center;

`;

const Title = styled.Text`
  color: white;
  font-size: 11px;
`;

export default AcceptButton;
