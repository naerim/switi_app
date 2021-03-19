import React from 'react';
import { AsyncStorage, AsyncStorageStatic, Text } from 'react-native';
import SearchContainer from './components/SearchHeader/SearchHeaderContainer';
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import OptionMenu from './components/OptionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';

const Search = () => {
  const searchInput = useInput('');

  const searchSomething = () => {
    const search = searchInput;
    const searchVoca = search.value;
    AsyncStorage.setItem('beforeSearch', JSON.stringify({ searchVoca }), () => {
      console.log(searchVoca, '저장 완료');
    });

    AsyncStorage.getItem('beforeSearch', (err, result) => {
      const BeforeSearch = JSON.parse(result);
      console.log(BeforeSearch.searchVoca, '가져옴');
    });
  };

  return (
    <SearchContainer headerTitle="검색">
      <Container>
        <SearchForm searchInput={searchInput}></SearchForm>
        <OptionMenu />
        <Line />
        <RecommendContainer />
        <Button title="검색" onPress={searchSomething} />
      </Container>
    </SearchContainer>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Line = styled.Text`
  width: 100%;
  height: 10px;
  background-color: #e3e3e3;
  margin: 10px 0;
`;

const Button = styled.Button`
  background-color: violet;
`;

export default Search;

/*
1. header 꺼야 하는데 MainNavigation ->Stack.Navigator 에서 끄면 메인홈에서도 없어진다.
2. header 아이콘 notion에 없다.
3. header 글씨 크기 모르겠다.
 */
