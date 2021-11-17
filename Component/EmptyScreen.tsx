import React from 'react';
import styled from 'styled-components/native';

interface Props {
  desc: string;
}

const EmptyScreen: React.FC<Props> = ({ desc }) => (
  <EmptyContainer>
    <EmptyFont>{desc}</EmptyFont>
  </EmptyContainer>
);

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

export default EmptyScreen;
