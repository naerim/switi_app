import React from 'react';
import styled from 'styled-components/native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { DataType } from '../Home/interface';
import SearchError from './components/searchError';
import { FlatList } from 'react-native';

interface Props {
  refreshScreen: () => void;
  isRefreshing: boolean;
  searchStudyList: any;
}

const SearchFlatList: React.FC<Props> = ({
  refreshScreen,
  isRefreshing,
  searchStudyList,
}) => {
  const FlatListItemSeparator = () => <SeparatorLine />;
  const handleLoadMore = () => {
    console.log('검색완료..');
  };

  return (
    <FlatListContainer>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        onRefresh={refreshScreen}
        refreshing={isRefreshing}
        data={searchStudyList}
        renderItem={({ item }) => (
          <RenderItem index={item.id} item={item} paddingHorizontal={20} />
        )}
        keyExtractor={(item: DataType) => item.id.toString()}
        extraData={searchStudyList}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <SearchError />}
      />
    </FlatListContainer>
  );
};

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const FlatListContainer = styled.View`
  margin: 0 24px;
  flex: 1;
`;

export default SearchFlatList;
