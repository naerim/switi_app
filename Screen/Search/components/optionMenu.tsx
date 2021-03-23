import React from 'react';
import styled from 'styled-components/native';

const OptionMenu = () => {
  return (
    <Container>
      <ItemContainer>
        <Question>최근 검색어</Question>
        <Answer>전체 삭제</Answer>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Question = styled.Text`
  font-weight: bold;
  color: #b4b4b4;
`;

const Answer = styled.Text`
  font-weight: bold;
  text-decoration: #b4b4b4 underline;
  color: #b4b4b4;
`;

export default OptionMenu;
