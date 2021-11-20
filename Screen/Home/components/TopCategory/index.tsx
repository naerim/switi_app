import React, { useState } from 'react';
import styled from 'styled-components/native';
import SelectFlatList from '../../../../Component/SelectFlatList';
import BasicModal from '../../../../Component/BasicModal';
import TagContainer from './TagContainer';
import { dataType } from '../../../Profile/interface';
import { useSelector } from 'react-redux';
import { rootState } from '../../../../redux';

interface Props {
  tagList: { id: number; name: string; category: string }[];
  setTagList: (
    prev: (
      prev: { id: number; name: string; category: string }[]
    ) => { id: number; name: string; category: string }[]
  ) => void;
}

const TopCategory: React.FC<Props> = ({ tagList, setTagList }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { state, interest, region } = useSelector(
    ({ dataReducer }: rootState) => ({
      state: dataReducer.state,
      interest: dataReducer.interest,
      region: dataReducer.region,
    })
  );

  // 카테고리 선택했을 때
  const onPress = (
    dataList: { id: number; name: string; category: string }[]
  ) => {
    setModalVisible(true);
    setData(dataList);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [selectCategory, setSelectCategory] = useState<number[]>([]);
  const [selectArea, setSelectArea] = useState<number[]>([]);
  const [selectTarget, setSelectTarget] = useState<number[]>([]);
  const [data, setData] = useState<
    { id: number; name: string; category: string }[]
  >([]);

  // name만 저장하는 함수
  const nameList = () => {
    const category = selectCategory.map((i) => interest[i].name);
    const area = selectArea.map((i) => region[i].name);
    const state1 = selectTarget.map((i) => state[i].name);
    const array = category.concat(area, state1);
    return array;
  };

  const determine = (data: dataType[]) => {
    if (data === interest) {
      return { select: selectCategory, setSelect: setSelectCategory };
    } else if (data === region) {
      return { select: selectArea, setSelect: setSelectArea };
    } else {
      return { select: selectTarget, setSelect: setSelectTarget };
    }
  };

  const categoryList = [
    { title: '카테고리', onPress: () => onPress(interest) },
    { title: '지역', onPress: () => onPress(region) },
    { title: '모집대상', onPress: () => onPress(state) },
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
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
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
