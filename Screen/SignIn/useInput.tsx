import React, { useState } from 'react';

const useInput = (intialValue: any) => {
  const [value, setValue] = useState(intialValue);
  const onChange = (text: any) => {
    setValue(text);
  };
  return { value, onChange };
};

export default useInput;
