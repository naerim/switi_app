import React, { useState, useCallback, useEffect } from 'react';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteThunk,
  searchDeleteThunk,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/search/searchReducer';
import SearchWord from './components/searchWord';
import { REFRESH_STUDY_LIST_SUCCESS } from '../../redux/action';
import SearchFlatList from './searchFlatList';

const Search = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  //axios default token 검색 -> axios interceptors 사용

  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => ({
      searchStudyList: state.searchReducer.searchStudyList,
      searchHistoryList: state.searchReducer.searchHistoryList,
    }),
    shallowEqual
  );
  //+ shallowEqual : searchStudyList, searchHistoryList 둘 중 하나가 업데이트 되었을 때, 바뀌면 리랜더링 한다.
  // 디스트럭쳐링만 하면 searchReducer 안의 어떠한 다른값이 변경되어도 리랜더링

  const searchInput = useInput('');

  const fetchOnSearch = (token: any, keyword: string) =>
    dispatch(searchRequest(token, keyword));

  const refreshSearch = () => dispatch({ type: REFRESH_STUDY_LIST_SUCCESS });

  const fetchOnSearchHistory = (token: any) =>
    dispatch(searchHistoryRequest(token));

  const handleSearchAllDelete = () => {
    dispatch(searchAllDeleteThunk(login.token));
  };

  const handleSearchDelete = (id: number) => {
    dispatch(searchDeleteThunk(login.token, id));
  };

  useEffect(() => {
    fetchOnSearchHistory(login.token);
  }, [dispatch]);

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
          searches={searchHistoryList}
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
