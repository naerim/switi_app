import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const Headder: React.FC<Props> = ({ title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
    </Wrap>
  );
};

const Wrap = styled.View`
  background-color: #fff;
  justify-content: center;
  height: 46px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;
export default Headder;
