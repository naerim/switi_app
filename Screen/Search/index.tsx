import React, { useState, useCallback, useEffect } from 'react';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteRequest,
  searchDeleteRequest,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/searchReducer';
import SearchWord from './components/searchWord';
import { REFRESH_STUDY_LIST_SUCCESS } from '../../redux/action';
import SearchFlatList from './searchFlatList';

const Search = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => state.searchReducer
  );
  const [searchHistory, setSearchHistory] = useState([]);
  const searchInput = useInput('');

  const fetchOnSearch = (token: any, keyword: string) =>
    dispatch(searchRequest(token, keyword));

  const refreshSearch = () => dispatch({ type: REFRESH_STUDY_LIST_SUCCESS });

  const fetchOnSearchHistory = (token: any) =>
    dispatch(searchHistoryRequest(token));

  const fetchSearchAllDelete = (token: any) => {
    dispatch(searchAllDeleteRequest(token));
  };

  const fetchSearchDelete = (token: any, id: number) => {
    dispatch(searchDeleteRequest(token, id));
  };

  useEffect(() => {
    fetchOnSearchHistory(login.token);
  }, [dispatch]);

  useEffect(() => {
    if (searchHistoryList) setSearchHistory(searchHistoryList);
  }, [searchHistoryList]);

  const handleSearchAllDelete = useCallback(async () => {
    await setSearchHistory([]); // X 프론트 처리
    await fetchSearchAllDelete(login.token); // X 백엔드 처리
  }, [searchHistory]);
  // X 전체 삭제 버튼 누르면 위 콜백 함수 호출

  const handleSearchDelete = async (id: number) => {
    await fetchSearchDelete(login.token, id);
    await fetchOnSearchHistory(login.token);
  }; // X 단어 옆 x 누르면 위 콜백 함수 호출

  const onPressWord = async (searchKeyword: string) => {
    searchInput.onChange('');
    await fetchOnSearch(login.token, searchKeyword);
    await fetchOnSearchHistory(login.token);
  };

  const handleSearch = async () => {
    const searchKeyword = searchInput.value;
    if (searchKeyword.trim() === '') {
      searchInput.onChange('');
      return;
    } else {
      searchInput.onChange('');
      await fetchOnSearch(login.token, searchKeyword);
      await fetchOnSearchHistory(login.token);
    }
  };

  const goAlarm = UseGoAlarm;

  const [isRefreshing, setIsRefreshing] = useState(false); // X flatList 내부의 로딩

  const refreshScreen = () => {
    setIsRefreshing(true);
    refreshSearch();
    setIsRefreshing(false);
  };

  return (
    <ContainerWithBell
      title="검색"
      onPressBell={goAlarm()}
      onPressTitle={refreshScreen}
    >
      <SearchForm searchInput={searchInput} onPress={handleSearch} />
      {!searchStudyList && (
        <SearchWord
          searches={searchHistory}
          onPressSearchDelete={handleSearchAllDelete}
          onPressX={handleSearchDelete}
          onPressWord={onPressWord}
          onRecommendWord={onPressWord}
        />
      )}
      {searchStudyList && (
        <SearchFlatList
          refreshScreen={refreshScreen}
          isRefreshing={isRefreshing}
          searchStudyList={searchStudyList}
        />
      )}
    </ContainerWithBell>
  );
};

export default Search;
