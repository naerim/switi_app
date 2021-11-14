import React from 'react';
import styled from 'styled-components/native';
import ProfileIcon from '../../../Img/icon_profile.png';
interface Props {
  name: string;
  img: string;
}

const UserName: React.FC<Props> = ({ name, img }) => {
  // const loadImg = (url: string) => {
  //   return 'http://localhost:4000/images/' + url;
  // };
  return (
    <Container>
      <LeftWrap>
        <Icon source={ProfileIcon} />
        <Title>{name}</Title>
      </LeftWrap>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 0;
`;

const LeftWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 40px;
`;

export default UserName;
