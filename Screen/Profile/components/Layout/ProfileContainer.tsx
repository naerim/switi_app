import React from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../../../Component/BasicContainer';
import Description from '../Description';

interface Props {
  desc: string;
  buttonText: string;
}

const ProfileContainer: React.FC<Props> = ({ desc, children, buttonText }) => {
  return (
    <BasicContainer headerTitle="프로필 설정">
      <Description desc={desc} />
      <Container>{children}</Container>
      <NextButton>
        <ButtonText>{buttonText}</ButtonText>
      </NextButton>
    </BasicContainer>
  );
};

const Container = styled.View`
  background-color: aqua;
  flex: 8;
`;

const NextButton = styled.TouchableOpacity`
  background-color: beige;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-size: 14px;
`;
export default ProfileContainer;
