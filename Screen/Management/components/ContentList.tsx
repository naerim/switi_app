import React from 'react';
import styled from 'styled-components/native';

interface Props {
  idx: number;
}

const ContentList: React.FC<Props> = ({ idx }) => {
  return <Container></Container>;
};

const Container = styled.View`
  margin: 24px;
`;

export default ContentList;
