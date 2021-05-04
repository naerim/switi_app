import React from 'react';
import styled from 'styled-components/native';
import { useGoMyPageProfile } from '../../../util/navigationHooks';
import ProfileIcon from '../../../Img/icon_profile.png';

interface Props {
  title: string;
}

const UserInfo: React.FC<Props> = ({ title }) => {
  const goProfile = useGoMyPageProfile();
  return (
    <Container>
      <LeftWrap>
        <Icon source={ProfileIcon} />
        <UserName>
          {title}
          <Nym> 님</Nym>
        </UserName>
      </LeftWrap>

      <ProfileButton>
        <MyProFileText onPress={() => goProfile()}>내 프로필</MyProFileText>
      </ProfileButton>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 24px 24px;
  flex: 0.8;
`;

const LeftWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Nym = styled.Text`
  font-size: 14px;
`;

const ProfileButton = styled.TouchableOpacity`
  position: relative;
  border: 1px solid #707070;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 23px;
`;

const MyProFileText = styled.Text`
  font-size: 10px;
`;

export default UserInfo;
