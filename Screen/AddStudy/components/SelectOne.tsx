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
}

const SelectOne: React.FC<Props> = ({ title, data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
    findName();
  };
  const [select, setSelect] = useState<number[]>([]);
  const name = useInput('선택해주세요');
  const findName = () =>
    select.forEach((i) => {
      name.onChange(data[i].name);
    });
  return (
    <AddStudyContainer title={title}>
      <SelectButton onPress={onPress} text={name.value} />
      <BasicModal modalVisible={modalVisible}>
        <SelectFlatList
          data={data}
          select={select}
          setSelect={setSelect}
          closeModal={closeModal}
          limit={1}
        />
      </BasicModal>
    </AddStudyContainer>
  );
};

export default SelectOne;
