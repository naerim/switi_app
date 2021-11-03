import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from '../Layout/AddStudyContainer';
import NumInput from './NumInput';
import { ColorProps } from '../../interface';

interface Props {
  input: { value: string; onChange: (value: string) => void };
  select: {
    recruitSelect: boolean;
    setRecruitSelect: (value: boolean) => void;
  };
}

const RecruitNum: React.FC<Props> = ({ input, select }) => {
  const onPress = () => {
    select.setRecruitSelect(!select.recruitSelect);
  };

  return (
    <AddStudyContainer title="모집인원">
      <Container>
        <NumInput input={input} select={select.recruitSelect} />
        <Content
          onPress={onPress}
          color={select.recruitSelect}
          activeOpacity={0.8}
        >
          <Title color={select.recruitSelect}>무관</Title>
        </Content>
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

export default RecruitNum;
