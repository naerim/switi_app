import React from 'react';
import styled from 'styled-components/native';
import UserIcon from '../../../../Img/icon_user_default.png';
import ClickIcon from '../../../../Img/btn_back.png';
import { useGoProfileDetail } from '../../../../util/navigationHooks';

interface Props {
  id: number;
  username?: string;
  idUser: number;
}

const WriterInfo: React.FC<Props> = ({ idUser, username, id }) => {
  const goProfileDetail = useGoProfileDetail(idUser, id);
  return (
    <Container activeOpacity={0.8} onPress={goProfileDetail}>
      <UserImage source={UserIcon} />
      <Username>{username}</Username>
      <Icon source={ClickIcon} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const Username = styled.Text`
  color: #2b2b2b;
  font-size: 10px;
  padding: 0 6px;
`;

const Icon = styled.Image`
  width: 8px;
  height: 8px;
  transform: scaleX(-1);
`;

export default WriterInfo;
