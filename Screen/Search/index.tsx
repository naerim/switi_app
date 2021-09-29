import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import { Alert, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { searchRequest } from '../../redux/searchReducer';
import StudyFlatList from '../Home/components/StudyFlatList';

const Search = ({ route }: any) => {
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const { search, searchError } = useSelector(
    ({ searchReducer }: rootState) => ({
      search: searchReducer.search,
      searchError: searchReducer.searchError,
    })
  );

  const dispatch = useDispatch();
  const onSearch = useCallback(
    (token, keyword) => dispatch(searchRequest(token, keyword)),
    [dispatch]
  );

  useEffect(() => {
    onSearch(login.token, searchInput);
  }, []);

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

  const RealOnPressSearchDelete = useCallback(() => {
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
        // console.log(searchVoca, '저장 완료');
      }
    );

    AsyncStorage.getItem('beforeSearch', (err, result) => {
      if (typeof result === 'string') {
        const BeforeSearch = JSON.parse(result);
        // console.log(BeforeSearch, '가져옴');
        onInsert(BeforeSearch.text);
        onSearch(login.token, searchVoca);
      }
    });
  };

  useEffect(() => {
    if (searchError == 'Request failed with status code 500')
      Alert.alert('검색오류 발생.');
    else if (searchError == 'Request failed with status code 200')
      Alert.alert('검색 성공');
  }, [search, searchError]);

  const goAlarm = UseGoAlarm;
  const [tagList, setTagList] = useState<
    { key: number; name: string; category: string }[]
  >([]);
  // 0 : 온라인, 1 : 오프라인
  const idx = 0;

  return (
    <ContainerWithBell title="검색" onPress={goAlarm()}>
      <SearchForm searchInput={searchInput} onPress={searchSomething} />
      {true ? (
        <Container>
          <OptionMenu onPressSearchDelete={RealOnPressSearchDelete} />
          <ListContainer>
            <SearchStoryList searches={searches} onPressX={onRemove} />
          </ListContainer>
          <Line />
          <RecommendContainer />
        </Container>
      ) : (
        <StudyFlatList idx={idx} tagList={tagList} />
      )}
    </ContainerWithBell>
  );
};

const Container = styled.TouchableOpacity``;

const ListContainer = styled.View`
  margin: 20px 0;
`;

const Line = styled.Text`
  height: 10px;
  background-color: #f3f3f3;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const ImcyComponent = styled.Text`
  font-size: 10px;
`;

export default Search;
