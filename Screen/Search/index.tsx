import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteRequest,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/searchReducer';
import { FlatList } from 'react-native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { DataType } from '../Home/interface';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';

const Search = () => {
  const dispatch = useDispatch(); // Xaction 받아서 store의 Reducer에서 넘김
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  })); // X 리덕스 상태값 조회

  // X 검색 + 검색어 저장 post
  const fetchOnSearch = (token: any, keyword: string) =>
    dispatch(searchRequest(token, keyword));

  // X 검색 기록 get
  const fetchOnSearchHistory = (token: any) =>
    dispatch(searchHistoryRequest(token));

  // X 검색 기록 all delete
  const fetchSearchAllDelete = (token: any) => {
    dispatch(searchAllDeleteRequest(token));
  };

  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => state.searchReducer
  );
  // X 리덕스 상태값
  // X 검색결과 보일 때, searchStudyList 사용

  useEffect(() => {
    fetchOnSearchHistory(login.token);
  }, [dispatch]);
  // X [dispatch] = 맨 처음 한번 실행하는 것과 같은 의미, 페이지 로드 되면, 검색결과 가져오기

  const [searches, setSearches] = useState([]);
  // X 검색 상태 변경 : 현재 검색 기록에만 사용중.

  const handleSearchAllDelete = useCallback(() => {
    setSearches([]); // X 프론트 처리
    fetchSearchAllDelete(login.token); // X 백엔드 처리
  }, [searches]);
  // X 전체 삭제 버튼 누르면 위 콜백 함수 호출

  const handleSearchDelete = useCallback(
    (id) => {
      setSearches(searches.filter((search) => search.id !== id));
    },
    [searches]
  ); // X 단어 옆 x 누르면 위 콜백 함수 호출

  const searchInput = useInput('');

  const searchSomething = () => {
    const searchVoca = searchInput.value;
    fetchOnSearch(login.token, searchVoca); // X 사용
    fetchOnSearchHistory(login.token);
  };

  const goAlarm = UseGoAlarm;

  const FlatListItemSeparator = () => <SeparatorLine />;
  const [isRefreshing, setIsRefreshing] = useState(false); // X flatList 내부의 로딩

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnSearch(login.token, searchInput.value);
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    console.log('검색 완료');
  };

  useEffect(() => {
    if (searchHistoryList) setSearches(searchHistoryList);
  }, [searchHistoryList]);

  return (
    <ContainerWithBell title="검색" onPress={goAlarm()}>
      <SearchForm searchInput={searchInput} onPress={searchSomething} />
      <Container>
        <OptionMenu onPressSearchDelete={handleSearchAllDelete} />
        <ListContainer>
          <SearchStoryList searches={searches} onPressX={handleSearchDelete} />
        </ListContainer>
        <Line />
        <RecommendContainer />
      </Container>
      {/*<FlatList*/}
      {/*  ItemSeparatorComponent={FlatListItemSeparator}*/}
      {/*  onRefresh={fetchItem}*/}
      {/*  refreshing={isRefreshing}*/}
      {/*  data={searchStudyList}*/}
      {/*  renderItem={useCallback(*/}
      {/*    ({ item }) => (*/}
      {/*      <RenderItem index={item.id} item={item} />*/}
      {/*    ),*/}
      {/*    []*/}
      {/*  )}*/}
      {/*  keyExtractor={(item: DataType) => item.id.toString()}*/}
      {/*  extraData={searchStudyList}*/}
      {/*  contentContainerStyle={{ paddingBottom: 80 }}*/}
      {/*  onEndReached={handleLoadMore}*/}
      {/*  onEndReachedThreshold={0}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  ListEmptyComponent={() => (*/}
      {/*    <EmptyContainer>*/}
      {/*      <EmptyFont>데이터 랜더링 실패 </EmptyFont>*/}
      {/*    </EmptyContainer>*/}
      {/*  )}*/}
      {/*/>*/}
    </ContainerWithBell>
  );
};

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const Container = styled.View``;

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
