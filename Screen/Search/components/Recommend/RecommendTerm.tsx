import React from 'react';
import styled from 'styled-components/native';

interface Props {
  term: string;
}

const RecommendTerm: React.FC<Props> = ({ term }) => {
  return (
    <Container>
      <Text>{term}</Text>
      <Line />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const Line = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  padding: 14px 0;
`;

export default RecommendTerm;
