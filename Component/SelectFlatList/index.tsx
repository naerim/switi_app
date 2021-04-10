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
}

interface Props {
  check: boolean;
}

const SelectFlatList: React.FC<FlatListProps> = ({
  data,
  select,
  setSelect,
  closeModal,
}) => {
  const FlatListItemSeparator = () => <Line />;

  const itemClick = (isChecked: boolean, index: number): void => {
    if (!isChecked && select.length !== 3) {
      setSelect((prev) => [...prev, index]);
      return;
    }

    setSelect((prev) => prev.filter((i) => i !== index));
  };

  const renderItem = (data: itemType) => {
    const isChecked = !!select.filter((i) => i === data.index).length;
    return (
      <Container
        activeOpacity={0.8}
        onPress={() => {
          itemClick(isChecked, data.index);
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
