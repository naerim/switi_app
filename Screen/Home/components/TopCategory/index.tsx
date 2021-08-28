import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Area, InterestList, TargetList } from '../../../../Data';
import SelectFlatList from '../../../../Component/SelectFlatList';
import BasicModal from '../../../../Component/BasicModal';
import TagContainer from './TagContainer';
import { dataType } from '../../../Profile/interface';

interface Props {
  tagList: { key: number; name: string }[];
  setTagList: (
    prev: (
      prev: { key: number; name: string }[]
    ) => { key: number; name: string }[]
  ) => void;
}

const TopCategory: React.FC<Props> = ({ tagList, setTagList }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // 카테고리 선택했을 때
  const onPress = (dataList: { key: number; name: string }[]) => {
    setModalVisible(true);
    setData(dataList);
  };
  const closeModal = () => {
    setModalVisible(false);
    console.log(tagList);
  };

  const [selectCategory, setSelectCategory] = useState<number[]>([]);
  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectTarget, setSelectTarget] = useState<number[]>([]);
  const [data, setData] = useState<{ key: number; name: string }[]>([]);

  const nameList = () => {
    const category = selectCategory.map((i) => InterestList[i].name);
    const area = selectArea.map((i) => Area[i].name);
    const target = selectTarget.map((i) => TargetList[i].name);
    const array = category.concat(area, target);
    return array;
  };

  const determine = (data: dataType[]) => {
    if (data === InterestList) {
      return { select: selectCategory, setSelect: setSelectCategory };
    } else if (data === Area) {
      return { select: selectArea, setSelect: setSelectArea };
    } else {
      return { select: selectTarget, setSelect: setSelectTarget };
    }
  };

  const categoryList = [
    { title: '카테고리', onPress: () => onPress(InterestList) },
    { title: '지역', onPress: () => onPress(Area) },
    { title: '모집대상', onPress: () => onPress(TargetList) },
  ];

  return (
    <Container>
      <SelectContainer>
        {categoryList.map(({ title, onPress }) => (
          <Content key={title} onPress={onPress}>
            <Title>{title}</Title>
          </Content>
        ))}
      </SelectContainer>
      <TagContainer
        tagList={tagList}
        setTagList={setTagList}
        nameList={nameList()}
        setSelectCategory={setSelectCategory}
        setSelectArea={setSelectArea}
        setSelectTarget={setSelectTarget}
      />
      <BasicModal modalVisible={modalVisible}>
        <SelectFlatList
          tagList={tagList}
          setTagList={setTagList}
          data={data}
          select={determine(data).select}
          setSelect={determine(data).setSelect}
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
