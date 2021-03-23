import React from 'react';
import styled from 'styled-components/native';

interface Props {
  desc: string;
}

const Description: React.FC<Props> = ({ desc }) => (
  <Container>
    <Desc>{desc}</Desc>
  </Container>
);

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Desc = styled.Text`
  text-align: center;
  font-size: 12px;
`;

export default Description;
