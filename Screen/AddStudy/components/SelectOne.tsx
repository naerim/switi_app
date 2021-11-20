import React, { useState } from 'react';
import AddStudyContainer from './Layout/AddStudyContainer';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import SelectFlatList from '../../../Component/SelectFlatList';
import { dataType } from '../../Profile/interface';
import Tag from '../../Profile/components/FlatListModal/Tag';

interface Props {
  title: string;
  data: dataType[];
  input: number[];
  setInput: (prev: (prev: number[]) => number[]) => void;
}

const SelectOne: React.FC<Props> = ({ title, data, input, setInput }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
  };

  const nameList = () => input.map((i) => data[i].name);
  return (
    <AddStudyContainer title={title}>
      <SelectButton onPress={onPress} text="선택해주세요" />
      <Tag
        nameList={nameList()}
        select={input}
        setSelect={setInput}
        data={data}
        column={false}
      />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <SelectFlatList
          data={data}
          select={input}
          setSelect={setInput}
          closeModal={closeModal}
          limit={3}
        />
      </BasicModal>
    </AddStudyContainer>
  );
};

export default SelectOne;
