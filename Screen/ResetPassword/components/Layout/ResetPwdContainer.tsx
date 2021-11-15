import React from 'react';
import styled from 'styled-components/native';
import BasicContainer from '../../../../Component/BasicContainer';
import ConfirmButton from '../ConfirmButton';

interface Props {
  buttonText: string;
  getNumber: any;
  onPress: () => void;
}

const ResetPwdContainer: React.FC<Props> = ({
  children,
  buttonText,
  getNumber,
  onPress,
}) => {
  return (
    <BasicContainer headerTitle="프로필 설정" display onPress={onPress}>
      <Container>{children}</Container>
      <ConfirmButton buttonText={buttonText} onClick={getNumber} />
    </BasicContainer>
  );
};

const Container = styled.View`
  flex: 6;
`;

export default ResetPwdContainer;
