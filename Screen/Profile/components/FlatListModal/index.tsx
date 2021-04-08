import React, { useState } from 'react';
import { FlatListType } from '../../interface';
import ProfileContent from '../Layout/ProfileContent';
import SelectButton from '../../../../Component/SelectButton';
import Tag from './Tag';
import BasicModal from '../../../../Component/BasicModal';
import SelectFlatList from '../../../../Component/SelectFlatList';

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
        <SelectFlatList data={data} select={select} setSelect={setSelect} />
      </BasicModal>
    </ProfileContent>
  );
};

export default FlatListModal;
