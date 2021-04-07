import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatListType, itemType } from '../../interface';
import IconCheck from '../../../../Img/icon_check.png';
import ProfileContent from '../Layout/ProfileContent';
import SelectButton from '../../../../Component/SelectButton';
import Tag from './Tag';
import BasicModal from '../../../../Component/BasicModal';
import { FlatList } from 'react-native';

interface Props {
  check: boolean;
}

const FlatListModal: React.FC<FlatListType> = ({
  title,
  data,
  select,
  setSelect,
  column,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

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

  // 선택한 아이템의 string 값을 저장한 배열
  const nameList = () => select.map((i) => data[i].name);

  return (
    <ProfileContent title={title}>
      <SelectButton onPress={onPress} />
      <Tag
        nameList={nameList()}
        select={select}
        setSelect={setSelect}
        data={data}
        column={column}
      />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key.toString()}
          extraData={data}
          showsVerticalScrollIndicator={false}
        />
      </BasicModal>
    </ProfileContent>
  );
};

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

export default FlatListModal;
