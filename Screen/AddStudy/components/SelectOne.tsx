import React, { useState } from 'react';
import AddStudyContainer from './Layout/AddStudyContainer';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import SelectFlatList from '../../../Component/SelectFlatList';
import useInput from '../../../util/useInput';
import { dataType } from '../../Profile/interface';

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
    findName();
  };
  const name = useInput('선택해주세요');
  const findName = () =>
    input.forEach((i) => {
      name.onChange(data[i].name);
    });
  return (
    <AddStudyContainer title={title}>
      <SelectButton onPress={onPress} text={name.value} />
      <BasicModal modalVisible={modalVisible}>
        <SelectFlatList
          data={data}
          select={input}
          setSelect={setInput}
          closeModal={closeModal}
          limit={1}
        />
      </BasicModal>
    </AddStudyContainer>
  );
};

export default SelectOne;
