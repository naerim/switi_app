import React from 'react';
import styled from 'styled-components/native';

interface Props {
  text?: string;
  visible: boolean;
}

const BlackModal: React.FC<Props> = ({ text, visible }) => (
  <Container visible={visible}>
    <Title>{text}</Title>
  </Container>
);

const Container = styled.View<Props>`
  width: ${(props) => (props.visible ? '87%' : '0px')};
  background-color: #2b2b2b;
  border-radius: 10px;
  position: absolute;
  height: 40px;
  bottom: 100px;
  margin: 0 24px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  align-items: center;
  font-size: 14px;
  color: white;
  justify-content: center;
`;

export default BlackModal;
