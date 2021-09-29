import React, { useCallback, useEffect, useState } from "react";
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from "../../../../redux";
import { onlineStudyListRequest } from "../../../../redux/studyReducer";
import ListHeader from "../../../Home/components/ListHeader";
import RenderItem from "../../../Home/components/StudyFlatList/RenderItem";
import { DataType } from "../../../Home/interface";

interface Props {
  idx: number;
  keyword: string;
}

const SearchFlatList: React.FC<Props> = ({ idx, keyword }) => {
  const [checked, setChecked] = useState(true);
  const [query, setQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩
  const FlatListItemSeparator = () => <SeparatorLine />;
  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const fetchSearchList = (order: boolean, query: string) => dispatch(SearchRequest(login.token, query));

  useEffect(() => {
    fetchOnlineStudyList(true, '');
    fetchOfflineStudyList(true, '');
  }, [dispatch]);

  useEffect(() => {
    let tag = '';
    tagList.forEach(({ key, name, category }) => {
      if (category == 'interest') {
        // 카테고리
        if (tag.includes('category')) tag += ':' + (key + 1).toString();
        else tag += '&category=' + (key + 1).toString();
      } else if (category == 'region') {
        // 지역
        if (tag.includes('region')) tag += ':' + (key + 1).toString();
        else tag += '&region=' + (key + 1).toString();
      } else {
        // 모집대상
        if (tag.includes('state')) tag += ':' + (key + 1).toString();
        else tag += '&state=' + (key + 1).toString();
      }
    });
    setQuery(tag);
  }, [tagList]);

  useEffect(() => {
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
  }, [checked, query]);
  //비동기적 처리 -> 동기적 처리 순서로 결과가 화면에 출력되지 않음
  //동기적 처리로 해결
  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnlineStudyList(checked, query);
    fetchOfflineStudyList(checked, query);
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    console.log('reached');
  };

  return (
    <Container>
      <ListHeader
        num={
          idx === 0
            ? onlineStudyList && onlineStudyList.length
            : offlineStudyList && offlineStudyList.length
        }
        check={{ checked, setChecked }}
      />
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        onRefresh={fetchItem}
        refreshing={isRefreshing}
        data={idx === 0 ? onlineStudyList : offlineStudyList}
        renderItem={useCallback(
          ({ item }) => (
            <RenderItem index={item.id} item={item} />
          ),
          []
        )}
        keyExtractor={(item: DataType) => item.id.toString()}
        extraData={idx === 0 ? onlineStudyList : offlineStudyList}
        contentContainerStyle={{ paddingBottom: 80 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyContainer>
            <EmptyFont>데이터 없음</EmptyFont>
          </EmptyContainer>
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 0 24px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

export default StudyFlatList;



export default SearchFlatList;