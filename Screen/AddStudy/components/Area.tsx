import React from 'react';
import AddStudyContainer from './Layout/AddStudyContainer';
import SelectButton from '../../../Component/SelectButton';

const Area = () => {
  return (
    <AddStudyContainer title="지역">
      <SelectButton onPress={() => console.log('area select')} />
    </AddStudyContainer>
  );
};

export default Area;
