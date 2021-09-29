import React, { useRef, useState } from 'react';
import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Input from '../AddStudy/components/Input';

const Search2 = ({  }) => {
  const [searchList, setSearchList] = useState([]);
  const search = ({ query, token }) => {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch(
      `http://localhost:4000/search/searchStudy?keyword=중국어&Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsImVtYWlsIjoibW4wMzE2QG5hdmVyLmNvbSIsIm5pY2tuYW1lIjoiSW1hYyIsImlhdCI6MTYzMjg5ODQxMn0.e_U2FrKi1fkzsRF22aDPl4DyWf0GsIil-ljJVUxflVM`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const [value, setValue] = useState('');

  //검색버튼 클릭 또는 검색창 엔터
  const handleSearch = () => {
    search(1,2);
    console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = () => {
    handleSearch();
  };

  //react-native textInput ref 사용불가
  // const inputRef = useRef();

  return (
    <SearchWrap>
      <Text>리뉴얼 검색화면</Text>
      <SearchForm>
        <SearchButton onPress={onClick} title="검색" />
        <SearchInput
          onSubmitEditing={onKeyPress}
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="검색어를 입력해주세요"
        />
      </SearchForm>
    </SearchWrap>
  );
};

const SearchWrap = styled.ScrollView`
  background-color: pink;
`;

const SearchForm = styled.View`
  background-color: wheat;
`;

const SearchInput = styled.TextInput`
  background-color: aquamarine;
`;

const SearchButton = styled.Button`
  background-color: cadetblue;
`;

export default Search2;
