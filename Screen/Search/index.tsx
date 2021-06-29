import React, { useState, useRef, useCallback } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';

const Search = () => {
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

  const RealonPressSearchDelete = useCallback(() => {
    setSearches([]);
  }, [searches]);
  // 이게 맞을까? 배열 초기화

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

  const onRemove = useCallback(
    (id) => {
      setSearches(searches.filter((search) => search.id !== id));
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
      if (typeof result === 'string') {
        const BeforeSearch = JSON.parse(result);
        console.log(BeforeSearch, '가져옴');
        onInsert(BeforeSearch.text);
      }
      //setSearches(BeforeSearch.searchVoca);
    });
  };

  const goAlarm = UseGoAlarm;
  return (
    <ContainerWithBell title="검색" onPress={goAlarm()}>
      <SearchForm searchInput={searchInput} onPress={searchSomething} />
      <OptionMenu onPressSearchDelete={RealonPressSearchDelete} />
      <ListContainer>
        <SearchStoryList searches={searches} onPressX={onRemove} />
      </ListContainer>
      <Line />
      <RecommendContainer />
    </ContainerWithBell>
  );
};

const ListContainer = styled.View`
  margin: 20px 0;
`;

const Line = styled.Text`
  height: 10px;
  background-color: #f3f3f3;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export default Search;
