import React from 'react';
import styled from 'styled-components/native';
import SugarContent from './sugarContent';

interface Props {
  num: number;
}

const Sugar: React.FC<Props> = ({ num }) => {
  return (
    <Container>
      <SugarContent num={num} />
    </Container>
  );
};

const Container = styled.View`
  height: 86px;
  margin-bottom: 24px;
  margin-top: 12px;
`;

export default Sugar;
