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
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const Line = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin-top: 10px;
`;

const Text = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #2b2b2b;
  text-align: left;
`;

export default RecommendTerm;
