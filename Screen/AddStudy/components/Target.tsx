import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { TargetProps } from '../interface';

interface ColorProps {
  color: boolean;
}

const Target: React.FC<TargetProps> = ({ select }) => {
  const targetList = [
    { title: '대학생' },
    { title: '취준생' },
    { title: '직장인' },
    { title: '무관' },
  ];

  const onPress = (title: string) => select.onChange(title);

  return (
    <AddStudyContainer title="모집대상">
      <Container>
        {targetList.map(({ title }) => (
          <Content
            key={title}
            onPress={() => onPress(title)}
            color={title === select.value}
            activeOpacity={0.8}
          >
            <Title color={title === select.value}>{title}</Title>
          </Content>
        ))}
      </Container>
    </AddStudyContainer>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Content = styled.TouchableOpacity<ColorProps>`
  border-radius: 20px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 24%;
  border-color: ${(props) => (props.color ? '#FFD57A' : '#e3e3e3')};
  background-color: ${(props) => (props.color ? '#FFD57A' : 'white')};
`;

const Title = styled.Text<ColorProps>`
  font-size: 12px;
  color: ${(props) => (props.color ? 'white' : '#e3e3e3')};
`;

export default Target;
