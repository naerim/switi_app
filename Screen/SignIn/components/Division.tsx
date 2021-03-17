import React from 'react';
import styled from 'styled-components/native';

const Division = () => (
  <Container>
    <Line />
    <Or>또는</Or>
    <Line />
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;

const Line = styled.Text`
  width: 40%;
  height: 1px;
  background-color: #e3e3e3;
  margin: 5px 0;
`;

const Or = styled.Text`
  width: 20%;
  font-size: 12px;
  color: #b4b4b4;
  margin-bottom: 2%;
  text-align: center;
`;

export default Division;
