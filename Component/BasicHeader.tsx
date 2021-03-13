import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const BasicHeader: React.FC<Props> = ({ title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
    </Wrap>
  );
};

const Wrap = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 46px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

export default BasicHeader;
