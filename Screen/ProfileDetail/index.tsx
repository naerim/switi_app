// 상대방 프로필 확인 페이지
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../Component/BasicContainer';
import { useGoBack } from '../../util/navigationHooks';
import Sugar from '../MyPage/Sugar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { rootState } from '../../redux';

const ProfileDetail = ({ route }: any) => {
  const idx = route.params.idx;
  const goBack = useGoBack();

  console.log('idx', idx);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:4000/user/userProfile/${idx}`,
      headers: { Authorization: login.token },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <BasicContainer headerTitle="" display={true} onPress={goBack}>
      <Title>상대방 프로필</Title>
      {/*/userProfile/:id*/}
      <Title>{idx}</Title>
      <Sugar num={20} />
    </BasicContainer>
  );
};

const Title = styled.Text``;

export default ProfileDetail;
