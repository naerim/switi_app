import React from 'react';
import styled from 'styled-components/native';

const Home = () => {
  return (
    <Container>
      <Content>
        <TestText>test</TestText>
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  margin: 0 24px;
`;
const TestText = styled.Text`
  font-size: 30px;
`;

export default Home;
