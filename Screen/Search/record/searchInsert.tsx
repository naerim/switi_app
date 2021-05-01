import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import useInput from '../../SignIn/util/useInput';
import { Button, View } from 'react-native';
import SearchForm from '../components/SearchForm';

//Insert
const SearchInsert = ({ onInsert, searchInput }) => {
  //const searchInput = useInput('');
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    onInsert(value);
    setValue('');
  }, [onInsert, value]);

  return (
    <Container>
      <SearchForm searchInput={searchInput}></SearchForm>
      {/*<Button title="검색" onClick={onClick} />*/}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: red;
`;

export default SearchInsert;
