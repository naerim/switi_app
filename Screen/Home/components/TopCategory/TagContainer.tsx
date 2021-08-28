import React from 'react';
import styled from 'styled-components/native';
import XIconBtn from '../../../../Img/btn_x_green.png';
import { TagType } from '../../interface';
import { Area, InterestList, TargetList } from '../../../../Data';

const TagContainer: React.FC<TagType> = ({
  tagList,
  setTagList,
  nameList,
  setSelectCategory,
  setSelectArea,
  setSelectTarget,
}) => {
  // x 버튼
  const deleteList = (name: string) => {
    Area.forEach((current, i) => {
      if (name === current.name) {
        const idx = i;
        setSelectArea((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { key: number; name: string }[]) =>
          prev.filter((i) => i.key !== idx)
        );
      }
    });

    InterestList.forEach((current, i) => {
      if (name === current.name) {
        const idx = i;
        setSelectCategory((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { key: number; name: string }[]) =>
          prev.filter((i) => i.key !== idx)
        );
        return;
      }
    });

    TargetList.forEach((current, i) => {
      if (name === current.name) {
        const idx = i;
        setSelectTarget((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { key: number; name: string }[]) =>
          prev.filter((i) => i.key !== idx)
        );
        return;
      }
    });

    console.log(tagList);

    //const idx = select.find((i: number) => data[i].name === name);
    //setSelect((prev: number[]) => prev.filter((i) => i !== idx));
  };

  return (
    <Scroll
      directionalLockEnabled={true}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        {nameList.map((i: string) => (
          <Content key={i}>
            <Title>{i}</Title>
            <XButton onPress={() => deleteList(i)}>
              <XIcon source={XIconBtn} />
            </XButton>
          </Content>
        ))}
      </Container>
    </Scroll>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Scroll = styled.ScrollView`
  flex-direction: row;
`;

const Content = styled.View`
  border-color: #86e3c3;
  flex-direction: row;
  border-width: 1px;
  border-radius: 19px;
  padding: 3px 5px;
  margin-right: 5px;
  align-items: center;
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

export default TagContainer;
