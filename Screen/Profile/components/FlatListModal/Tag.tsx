import React from 'react';
import styled from 'styled-components/native';
import XIconBtn from '../../../../Img/btn_x_green.png';
import { TagType } from '../../interface';

interface Props {
  column?: boolean;
}

const Tag: React.FC<TagType> = ({
  nameList,
  select,
  setSelect,
  data,
  column,
}) => {
  // x 버튼
  const deleteList = (name: string) => {
    const idx = select.find((i: number) => data[i].name === name);
    setSelect((prev: number[]) => prev.filter((i) => i !== idx));
  };

  return (
    <Container column={column}>
      {nameList.map((i: string) => (
        <Content key={i} column={column}>
          <Title>{i}</Title>
          <XButton onPress={() => deleteList(i)}>
            <XIcon source={XIconBtn} />
          </XButton>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.View<Props>`
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.column ? 'flex-start' : 'center')};
  margin-top: 10px;
`;

const Content = styled.View<Props>`
  border-color: #86e3c3;
  flex-direction: row;
  border-width: 1px;
  border-radius: 19px;
  padding: 3px 5px;
  margin-right: 5px;
  align-items: center;
  margin-bottom: ${(props) => (props.column ? '5px' : '0')}; ;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #4fd5a7;
  margin-right: 8px;
`;

const XIcon = styled.Image`
  width: 10px;
  height: 10px;
`;

const XButton = styled.TouchableOpacity`
  width: 10px;
  height: 10px;
`;

export default Tag;