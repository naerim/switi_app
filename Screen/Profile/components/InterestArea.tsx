import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import { FlatList } from 'react-native';
import { Area } from '../../../Data';
import IconCheck from '../../../Img/icon_check.png';
import { itemType } from '../interface';
import XIconBtn from '../../../Img/btn_x_green.png';

interface Props {
  check: boolean;
}

const InterestArea = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [select, setSelect] = useState<number[]>([]);

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
  const nameList = () => select.map((i) => Area[i].name);

  const deleteList = (name: string) => {
    const idx = select.find((i) => Area[i].name === name);
    setSelect((prev) => prev.filter((i) => i !== idx));
  };

  return (
    <ProfileContent title="관심지역 (3개 이하 선택)">
      <SelectButton onPress={onPress} />
      <TagContainer>
        {nameList().map((i) => (
          <TagContent key={i}>
            <Tag>{i}</Tag>
            <XButton onPress={() => deleteList(i)}>
              <XIcon source={XIconBtn} />
            </XButton>
          </TagContent>
        ))}
      </TagContainer>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={Area}
          renderItem={renderItem}
          keyExtractor={(item) => item.key.toString()}
          extraData={Area}
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

const TagContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

const TagContent = styled.View`
  border-color: #86e3c3;
  flex-direction: row;
  border-width: 1px;
  border-radius: 19px;
  padding: 3px 5px;
  margin-right: 5px;
  align-items: center;
`;

const Tag = styled.Text`
  font-size: 12px;
  color: #4fd5a7;
  margin-right: 8px;
`;

const XIcon = styled.Image`
  width: 10px;
  height: 10px;
`;

const XButton = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
`;

export default InterestArea;
