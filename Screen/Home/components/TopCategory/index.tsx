import React from 'react';
import styled from 'styled-components/native';

const TopCategory = () => {
  const categoryData = [
    {
      title: '카테고리',
    },
    {
      title: '지역',
    },
    {
      title: '모집대상',
    },
  ];

  return (
    <Container>
      {categoryData.map(({ title }) => (
        <Content key={title}>
          <Title>{title}</Title>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 24px;
`;

const Content = styled.TouchableOpacity`
  background-color: #f3f3f3;
  border-radius: 14px;
  padding: 6px 12px;
  margin-right: 10px;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

export default TopCategory;
