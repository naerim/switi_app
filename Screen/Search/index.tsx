import React, { useState, useRef, useCallback } from 'react';
import { AsyncStorage, Text } from 'react-native';
import SearchContainer from './components/SearchHeader/SearchHeaderContainer';
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import OptionMenu from './components/OptionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';
//import SearchInsert from './record/searchInsert';

const Search = () => {
  //최근 검색어 초기 배열

const [value,setValue] = useState('');
  const [searches, setSearches] = useState([
    {
      id: 1,
      text: '토익공부',
    },
    {
      id: 2,
      text: '파이썬공부',
    },
    {
      id: 3,
      text: '코딩테스트',
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const search = {
        id: nextId.current,
        text,
      };
      setSearches(searches.concat(search));
      nextId.current += 1;
    },
    [searches]
  );

  const searchInput = useInput('');

  const searchSomething = () => {
    const searchVoca = searchInput.value;
    AsyncStorage.setItem(
      'beforeSearch',
      JSON.stringify({ id: nextId.current, text: searchVoca }),
      () => {
        console.log(searchVoca, '저장 완료');
      }
    );

    AsyncStorage.getItem('beforeSearch', (err, result) => {
      const BeforeSearch = JSON.parse(result);
      console.log(BeforeSearch, '가져옴');
      onInsert(BeforeSearch.text);
      //setSearches(BeforeSearch.searchVoca);
    });
  };

  return (
    <SearchContainer headerTitle="검색">
      <Container>
        {/*<SearchInsert searchInput={searchInput} onInsert={onInsert}/>*/}
        <SearchForm searchInput={searchInput}></SearchForm>
        {/*<SearchInsert></SearchInsert>*/}
        <OptionMenu />
        {/*<Text>{searches}</Text>*/}
        {/*<RecordContainer><Text>저장</Text></RecordContainer>*/}
        <SearchStoryList searches={searches} />
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
