import React from 'react';
import AddStudyContainer from './Layout/AddStudyContainer';
import SelectButton from '../../../Component/SelectButton';

const Category = () => {
  return (
    <AddStudyContainer title="카테고리">
      <SelectButton onPress={() => console.log('select')} />
    </AddStudyContainer>
  );
};

export default Category;
