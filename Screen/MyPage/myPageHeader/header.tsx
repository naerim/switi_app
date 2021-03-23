import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
}

const Headder: React.FC<Props> = ({ title }) => {
  return (
    <Wrap>
      <Container>
        <Title>{title}</Title>
      </Container>
      <AlarmIcon source={require('./bell.png')} />
    </Wrap>
  );
};

const Wrap = styled.View`
  background-color: #fff;
  justify-content: space-between;
  height: 46px;
`;

const Container = styled.View`
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;

const AlarmIcon = styled.Image`
  width: 18px;
  height: 18px;
`;
export default Headder;
