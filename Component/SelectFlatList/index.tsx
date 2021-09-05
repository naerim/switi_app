import React from 'react';
import styled from 'styled-components/native';
import { dataType, itemType } from '../../Screen/Profile/interface';
import IconCheck from '../../Img/icon_check.png';
import { FlatList } from 'react-native';
import SelectCategoryButton from './SelectCategoryButton';

interface FlatListProps {
  data: dataType[];
  select: number[];
  setSelect: (prev: (prev: number[]) => number[]) => void;
  closeModal: () => void;
  limit?: number;
  tagList: { key: number; name: string; category: string }[];
  setTagList: (
    prev: (
      prev: { key: number; name: string; category: string }[]
    ) => { key: number; name: string; category: string }[]
  ) => void;
}

interface Props {
  check: boolean;
}

const SelectFlatList: React.FC<FlatListProps> = ({
  data,
  select,
  setSelect,
  closeModal,
  limit,
  setTagList,
}) => {
  const FlatListItemSeparator = () => <Line />;

  const itemClick = (
    isChecked: boolean,
    index: number,
    name: string,
    category: string
  ): void => {
    const limitNum = limit ? limit : 3; // 선택 제한 갯수
    if (!isChecked && select.length !== limitNum) {
      setSelect((prev) => [...prev, index]);
      setTagList((prev) => [
        ...prev,
        { key: index, name: name, category: category },
      ]);
      return;
    }

    setSelect((prev) => prev.filter((i) => i !== index));
    setTagList((prev) => prev.filter((i) => i.key !== index));
  };

  const renderItem = (data: itemType) => {
    const isChecked = !!select.filter((i) => i === data.index).length;
    return (
      <Container
        activeOpacity={0.8}
        onPress={() => {
          itemClick(isChecked, data.index, data.item.name, data.item.category);
        }}
      >
        <Category check={isChecked}>{data.item.name}</Category>
        <Icon check={isChecked} source={IconCheck} />
      </Container>
    );
  };

  return (
    <BigContainer>
      <FlatList
        ItemSeparatorComponent={FlatListItemSeparator}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
        extraData={data}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      <SelectCategoryButton onPress={closeModal} />
    </BigContainer>
  );
};

const BigContainer = styled.View`
  margin-bottom: 40px;
`;

const Container = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 0;
`;

const Category = styled.Text<Props>`
  font-size: 12px;
  color: ${(props) => (props.check ? '#4fd5a7' : '#2b2b2b')};
`;

const Icon = styled.Image<Props>`
  width: 12px;
  height: 12px;
  display: ${(props) => (props.check ? 'flex' : 'none')};
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default SelectFlatList;
