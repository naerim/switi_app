import React, { useState } from 'react';
import { ItemType } from '../../ManageProceeding/interface';
import styled from 'styled-components/native';
import MemberImage from '../../ManageProceeding/components/MemberImage';
import AcceptButton from '../../ManageProceeding/components/AcceptButton';
import { useGoProfileDetail } from '../../../util/navigationHooks';
import RecruitModal from './RecruitModal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

const WaitRenderItem: React.FC<ItemType> = ({ item }) => {
  const goProfileDetail = useGoProfileDetail(item.idUser);
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;
  const [RecruitModalVisible, setRecruitModalVisible] = useState(false);
  const closeRecruitModal = () => setRecruitModalVisible(false);

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const onPress = () => setRecruitModalVisible(true);

  const acceptApply = () => {
    const abortController = new AbortController();
    axios({
      method: 'put',
      url: `http://localhost:4000/manage/acceptApply/${item.id}`,
      headers: { Authorization: login.token },
    })
      .then(() => {
        closeRecruitModal();
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  };

  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <MemberImage img={'imgPath'} />
      <Content>
        <Title>{item.User.nickname}</Title>
        <Desc>{limitTitle(item.apply_detail)}</Desc>
      </Content>
      <AcceptButton title="처리하기" display={true} onPress={onPress} />
      <RecruitModal
        item={item}
        modalVisible={RecruitModalVisible}
        acceptApply={acceptApply}
        closeModal={closeRecruitModal}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: 16px;
  align-items: center;
`;

const Content = styled.View`
  flex: 3;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.Text`
  font-weight: bold;
  margin-top: 14px;
  font-size: 14px;
  color: #2b2b2b;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #b4b4b4;
  width: 80%;
  margin: 5px 0;
`;

export default WaitRenderItem;
