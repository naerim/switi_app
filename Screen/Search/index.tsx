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
  searchDeleteRequest,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/searchReducer';
import { FlatList } from 'react-native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { DataType } from '../Home/interface';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';

// X 남은잡업
// 아무거도 입력안하면 검색하면 본 화면,
// 검색 누르면 본 화면,
// 검색 결과 없을 때 화면..

const Search = () => {
  const dispatch = useDispatch(); // X action 받아서 store의 Reducer에서 넘김
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

  // X 검색 기록 하나 삭제
  const fetchSearchDelete = (token: any, id: number) => {
    dispatch(searchDeleteRequest(token, id));
  };

  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => state.searchReducer
  );
  // X 리덕스 상태값
  // X 검색결과 보일 때, searchStudyList 사용

  const [searches, setSearches] = useState([]);
  // X 검색 상태 변경 : 현재 검색 기록에만 사용중.

  const searchInput = useInput('');

  useEffect(() => {
    fetchOnSearchHistory(login.token);
  }, [dispatch]);
  // X [dispatch] = 맨 처음 한번 실행하는 것과 같은 의미, 페이지 로드 되면, 검색결과 가져오기

  const handleSearchAllDelete = useCallback(async () => {
    await setSearches([]); // X 프론트 처리
    await fetchSearchAllDelete(login.token); // X 백엔드 처리
  }, [searches]);
  // X 전체 삭제 버튼 누르면 위 콜백 함수 호출

  const handleSearchDelete = async (id: number) => {
    await fetchSearchDelete(login.token, id);
    await fetchOnSearchHistory(login.token);
  }; // X 단어 옆 x 누르면 위 콜백 함수 호출

  const searchSomething = async () => {
    const searchKeyword = searchInput.value;
    await fetchOnSearch(login.token, searchKeyword);
    await fetchOnSearchHistory(login.token);
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
      {!searchStudyList ? (
        <Container>
          <OptionMenu onPressSearchDelete={handleSearchAllDelete} />
          <ListContainer>
            <SearchStoryList
              searches={searches}
              onPressX={handleSearchDelete}
            />
          </ListContainer>
          <Line />
          <RecommendContainer />
        </Container>
      ) : (
        <Container>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            onRefresh={fetchItem}
            refreshing={isRefreshing}
            data={searchStudyList}
            renderItem={({ item }) => (
              <RenderItem index={item.id} item={item} />
            )}
            keyExtractor={(item: DataType) => item.id.toString()}
            extraData={searchStudyList}
            contentContainerStyle={{
              paddingBottom: 80,
            }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              //검색 결과가 없습니다. 필요하지 않나?
              <Container>
                <OptionMenu onPressSearchDelete={handleSearchAllDelete} />
                <ListContainer>
                  <SearchStoryList
                    searches={searches}
                    onPressX={handleSearchDelete}
                  />
                </ListContainer>
                <Line />
                <RecommendContainer />
              </Container>
            )}
          />
        </Container>
      )}
      {console.log(`현재 검색결과 : ${JSON.stringify(searchStudyList)}`)}
    </ContainerWithBell>
  );
};

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

export default Search;
