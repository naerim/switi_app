import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import { FlatList } from 'react-native';
import { InterestList } from '../../../Data';

interface Props {
  check: boolean;
}

const InterestField = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [dataSource, setDataSource] = useState(InterestList);
  const [select, setSelect] = useState([]);

  const FlatListItemSeparator = () => <Line />;
  const selectItem = (data) => {
    data.isSelect = !data.isSelect;
    const index = dataSource.findIndex((item) => data.index === item.key);
    dataSource[index] = data.item;
    setDataSource(dataSource);
  };

  const renderItem = (data) => (
    <Container
      activeOpacity={0.8}
      onPress={() => {
        selectItem(data);
        setSelect(data.item.name);
      }}
    >
      <Category check={select === data.item.name}>{data.item.name}</Category>
      <Icon
        check={select === data.item.name}
        source={require('../../../Img/icon_check.png')}
      />
    </Container>
  );

  return (
    <ProfileContent title="관심분야 (3개 이하 선택)">
      <SelectButton onPress={onPress} />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={dataSource}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.key.toString()}
          extraData={dataSource}
        />
      </BasicModal>
    </ProfileContent>
  );
  //   <ProfileContent title="관심분야 (3개 이하 선택)">
  //     <SelectButton onPress={onPress} />
  //     <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
  //       <FlatList
  //         keyExtractor={(item) => String(item.category)}
  //         data={InterestList}
  //         extraData={!checked}
  //         renderItem={({ item }) => (
  //           <Container
  //             activeOpacity={0.8}
  //             onPress={() => {
  //               console.log(item.category);
  //               setChecked({ categoryChecked: item.category });
  //             }}
  //           >
  //             <Category>
  //               {checked.categoryChecked === item.category && item.name}{' '}
  //             </Category>
  //             <Icon source={require('../../../Img/icon_check.png')} />
  //           </Container>
  //         )}
  //       />
  //     </BasicModal>
  //   </ProfileContent>
  // );
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

export default InterestField;
