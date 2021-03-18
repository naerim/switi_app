import React from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../../../Component/BasicContainer';
import Description from '../Description';
import NextButton from '../NextButton';

interface Props {
  desc: string;
  buttonText: string;
  onClick: () => void;
}

const ProfileContainer: React.FC<Props> = ({
  desc,
  children,
  buttonText,
  onClick,
}) => {
  return (
    <BasicContainer headerTitle="프로필 설정">
      <Description desc={desc} />
      <Container>{children}</Container>
      <NextButton buttonText={buttonText} onClick={onClick} />
    </BasicContainer>
  );
};

const Container = styled.View`
  flex: 6;
`;

export default ProfileContainer;
