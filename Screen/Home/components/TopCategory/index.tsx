import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Area, InterestList, TargetList } from '../../../../Data';
import SelectFlatList from '../../../../Component/SelectFlatList';
import BasicModal from '../../../../Component/BasicModal';
import TagContainer from './TagContainer';

const TopCategory = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // 카테고리 선택했을 때
  const onPress = (dataList: { key: number; name: string }[]) => {
    setModalVisible(true);
    setData(dataList);
  };
  const closeModal = () => setModalVisible(false);

  const [selectCategory, setSelectCategory] = useState<number[]>([]);
  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectTarget, setSelectTarget] = useState<number[]>([]);

  const [select, setSelect] = useState<number[]>([]);
  const [data, setData] = useState<{ key: number; name: string }[]>([]);

  const determineSelect = (data) => {
    if (data === InterestList) {
      return selectCategory;
    } else if (data === Area) {
      return selectArea;
    } else return selectTarget;
  };

  const determineSetSelect = (data) => {
    if (data === InterestList) {
      return setSelectCategory;
    } else if (data === Area) {
      return setSelectArea;
    } else return setSelectTarget;
  };

  const nameList = () => {
    const category = selectCategory.map((i) => InterestList[i].name);
    const area = selectArea.map((i) => Area[i].name);
    const target = selectTarget.map((i) => TargetList[i].name);
    const array = category.concat(area, target);
    return array;
  };

  return (
    <Container>
      <SelectContainer>
        <Content onPress={() => onPress(InterestList)}>
          <Title>카테고리</Title>
        </Content>
        <Content onPress={() => onPress(Area)}>
          <Title>지역</Title>
        </Content>
        <Content onPress={() => onPress(TargetList)}>
          <Title>모집대상</Title>
        </Content>
      </SelectContainer>
      <TagContainer
        nameList={nameList()}
        select={select}
        setSelect={setSelect}
        data={InterestList}
      />
      <BasicModal modalVisible={modalVisible}>
        <SelectFlatList
          data={data}
          select={determineSelect(data)}
          setSelect={determineSetSelect(data)}
          closeModal={closeModal}
        />
      </BasicModal>
    </Container>
  );
};

const Container = styled.View`
  margin: 24px;
`;

const SelectContainer = styled.View`
  flex-direction: row;
`;

const Content = styled.TouchableOpacity`
  background-color: #f3f3f3;
  border-radius: 14px;
  padding: 6px 12px;
  margin-right: 10px;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 12px;
`;

export default TopCategory;
