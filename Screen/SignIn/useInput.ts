import { useState } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (text: any) => {
    setValue(text);
  };
  return { value, onChange };
};

export default useInput;
