import React from 'react';
import styled from 'styled-components/native';
import XIconBtn from '../../../../Img/btn_x_green.png';
import { TagType } from '../../interface';
import { useSelector } from 'react-redux';
import { rootState } from '../../../../redux';

const TagContainer: React.FC<TagType> = ({
  setTagList,
  nameList,
  setSelectCategory,
  setSelectArea,
  setSelectTarget,
}) => {
  const { state, interest, region } = useSelector(
    ({ dataReducer }: rootState) => ({
      state: dataReducer.state,
      interest: dataReducer.interest,
      region: dataReducer.region,
    })
  );

  // x 버튼
  const deleteList = (name: string) => {
    region.forEach((current: { name: string }, i: any) => {
      if (name === current.name) {
        const idx = i;
        setSelectArea((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { id: number; name: string; category: string }[]) =>
          prev.filter((i) => i.id !== idx)
        );
      }
    });

    interest.forEach((current: { name: string }, i: any) => {
      if (name === current.name) {
        const idx = i;
        setSelectCategory((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { id: number; name: string; category: string }[]) =>
          prev.filter((i) => i.id !== idx)
        );
        return;
      }
    });

    state.forEach((current: { name: string }, i: any) => {
      if (name === current.name) {
        const idx = i;
        setSelectTarget((prev: number[]) => prev.filter((i) => i !== idx));
        setTagList((prev: { id: number; name: string; category: string }[]) =>
          prev.filter((i) => i.id !== idx)
        );
        return;
      }
    });
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
