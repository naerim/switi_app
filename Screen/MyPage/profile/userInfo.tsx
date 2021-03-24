import React from 'react';
import styled from 'styled-components/native';
import { useGoMyPageProfile } from '../../../util/navigationHooks';

interface Props {
  title: string;
}

const UserInfo: React.FC<Props> = ({ title }) => {
  const goProfile = useGoMyPageProfile();
  return (
    <Container>
      <UserName>
        {title}
        <Nym> 님</Nym>
      </UserName>

      <ProfileButton>
        <MyProFileText onPress={() => goProfile()}>내 프로필</MyProFileText>
      </ProfileButton>
    </Container>
  );
};

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 24px;
`;

const Nym = styled.Text`
  font-size: 14px;
`;

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const ProfileButton = styled.TouchableOpacity`
  position: relative;
  border: 1px solid #707070;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 62px;
  height: 23px;
`;

const MyProFileText = styled.Text`
  font-size: 10px;
`;

export default UserInfo;
