import React from 'react';
import styled from 'styled-components/native';
import ProfileImage from '../../../Img/icon_profile.png';

interface Props {
  img: string;
  nickname: string;
  desc: string;
}
const ApplyInfo: React.FC<Props> = ({ img, nickname, desc }) => (
  <Container>
    <Profile>
      <Images source={ProfileImage} resizeMode="stretch" />
      <Nickname>{nickname}</Nickname>
    </Profile>
    <Desc>
      <DescText>{desc}</DescText>
    </Desc>
  </Container>
);

const Container = styled.View`
  padding: 0 24px;
`;

const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Nickname = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  margin-left: 10px;
`;

const Desc = styled.View`
  margin-top: 10px;
  margin-bottom: 80px;
  background-color: #f3f3f3;
  border-radius: 4px;
  height: 80px;
  padding: 16px;
`;

const DescText = styled.Text`
  font-size: 12px;
`;

const Images = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 60px;
`;

export default ApplyInfo;
