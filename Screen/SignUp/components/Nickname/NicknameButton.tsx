import React from 'react';
import styled from 'styled-components/native';

interface Props {
  value: string;
  check: () => void;
}

const NicknameButton: React.FC<Props> = ({ value, check }) => {
  return (
    <Container
      activeOpacity={0.8}
      onPress={() => {
        console.log(value);
        check();
      }}
    >
      <ButtonText>중복확인</ButtonText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  width: 25%;
  background-color: #ffd57a;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 36px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
`;

export default NicknameButton;
