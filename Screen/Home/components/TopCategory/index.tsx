import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Area, InterestList, TargetList } from '../../../../Data';
import SelectFlatList from '../../../../Component/SelectFlatList';
import BasicModal from '../../../../Component/BasicModal';

const TopCategory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = (data: { key: number; name: string }[]) => {
    setModalVisible(true);
    setSelectData(data);
    //addTagList();
  };
  const closeModal = () => setModalVisible(false);

  // const [interest, setInterest] = useState<number[]>([]);
  // const [area, setArea] = useState<number[]>([]);
  // const [target, setTarget] = useState<number[]>([]);
  const [select, setSelect] = useState<number[]>([]);
  const [selectData, setSelectData] = useState<{ key: number; name: string }[]>(
    []
  );
  // const [tag, setTag] = useState<string[]>([]);

  // const addTagList = () => {
  //   const nameList = () => interest.map((i) => InterestList[i].name);
  //   const nameList1 = () => area.map((i) => Area[i].name);
  //   const array = nameList().concat(nameList1());
  //   setTag(array);
  // };

  const categoryData = [
    {
      title: '카테고리',
      data: InterestList,
    },
    {
      title: '지역',
      data: Area,
    },
    {
      title: '모집대상',
      data: TargetList,
    },
  ];

  return (
    <Container>
      <SelectContainer>
        {categoryData.map(({ title, data }) => (
          <Content key={title} onPress={() => onPress(data)}>
            <Title>{title}</Title>
            <BasicModal modalVisible={modalVisible}>
              <SelectFlatList
                data={selectData}
                select={select}
                setSelect={setSelect}
                closeModal={closeModal}
              />
            </BasicModal>
          </Content>
        ))}
      </SelectContainer>
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

const Div = styled.View`
  flex-direction: column;
`;

const Desc = styled.Text`
  color: red;
`;

export default TopCategory;
