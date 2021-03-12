import React from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../BasicHeader';

interface Props {
  children: React.ReactNode;
  header: string;
}

const BasicContainer: React.FC<Props> = ({ children, header }) => {
  return (
    <Wrap>
      <BasicHeader title={header} />
      <Container>{children}</Container>
    </Wrap>
  );
};

export default BasicContainer;

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  margin: 0 24px;
  background-color: #fff;
`;
