import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

interface Props {
  address: any[];
  category: any[];
  target: any[];
}

const Category: React.FC<Props> = ({ address, category, target }) => {
  const [myCategory, setMyCategory] = useState('');

  useEffect(() => {
    setCategory();
  }, []);

  // 카테고리 지정(카테고리가 여러개일수도 있으므로)
  const setCategory = () => {
    const num = category.length;
    // 카테고리가 2개 이상일때 ,로 구분
    if (num > 1) {
      let i = 0;
      let wholeCategory = '';
      category.forEach(({ category }) => {
        wholeCategory += category;
        if (num - 1 !== i) wholeCategory += ',';
        i++;
      });
      setMyCategory(wholeCategory);
    } else setMyCategory(category[0]?.category);
  };

  return (
    <Container>
      <Item>{address[0]?.Region.city}</Item>
      <Item>{myCategory}</Item>
      <Item>{target[0]?.category}</Item>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Item = styled.Text`
  color: #2b2b2b;
  font-size: 10px;
  border-color: #ececec;
  border-radius: 10px;
  border-width: 1px;
  padding: 5px;
  margin-right: 5px;
`;

export default Category;
