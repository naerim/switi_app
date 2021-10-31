import React, { useState, useCallback, useEffect } from 'react';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteRequest,
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
  // 이전코드는 searchReducer 안의 어떠한 다른값이 변경되어도 리랜더링

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

  useEffect(() => {
    fetchOnSearchHistory(login.token);
  }, [dispatch]);

  // const handleSearchAllDelete = useCallback(async () => {
  //   await setSearchHistory([]); // X 프론트 처리
  //   await fetchSearchAllDelete(login.token); // X 백엔드 처리
  // }, [searchHistory]);
  // X 전체 삭제 버튼 누르면 위 콜백 함수 호출

  const handleSearchAllDelete = useCallback(async () => {
    await fetchSearchAllDelete(login.token);
    await fetchOnSearchHistory(login.token);
  }, [searchHistory]);

  const handleSearchDelete = (id: number) => {
    dispatch(searchDeleteThunk(login.token, id));
  };

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
