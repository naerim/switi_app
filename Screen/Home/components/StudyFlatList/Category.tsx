import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { shallowEqual, useSelector } from 'react-redux';
import { rootState } from '../../../../redux';

interface Props {
  address: any[];
  category: any[];
  target: any[];
}

const Category: React.FC<Props> = ({ address, category, target }) => {
  const [myCategory, setMyCategory] = useState('');
  const [myTarget, setMyTarget] = useState('');

  const { onlineStudyList, offlineStudyList } = useSelector(
    (state: rootState) => state.studyReducer
  );
  const { searchStudyList } = useSelector(
    (state: rootState) => ({
      searchStudyList: state.searchReducer.searchStudyList,
    }),
    shallowEqual
  );

  useEffect(() => {
    setCategory();
    setTarget();
  }, [onlineStudyList, offlineStudyList, searchStudyList]);

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

  const setTarget = () => {
    const num = target.length;
    // 모집대상이 2개 이상일때 ,로 구분
    if (num > 1) {
      let i = 0;
      let wholeTarget = '';
      target.forEach(({ category }) => {
        wholeTarget += category;
        if (num - 1 !== i) wholeTarget += ',';
        i++;
      });
      setMyTarget(wholeTarget);
    } else setMyTarget(target[0]?.category);
  };

  return (
    <Container>
      <Item>{address[0]?.Region.city}</Item>
      <Item>{myCategory}</Item>
      <Item>{myTarget}</Item>
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
