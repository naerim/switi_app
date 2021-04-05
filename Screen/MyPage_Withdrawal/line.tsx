import React from 'react';
import styled from 'styled-components/native';

interface Line {
  line: boolean;
}

const DrawLine: React.FC<Line> = ({ line }) => (
  <Container>{line ? <SmallLine /> : <Nothing />}</Container>
);

const Container = styled.View``;

const SmallLine = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const Nothing = styled.Text`
  width: 100%;
  height: 1px;
  background-color: white;
`;

export default DrawLine;
