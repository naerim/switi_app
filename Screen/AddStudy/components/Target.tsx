import React from 'react';
import styled from 'styled-components/native';
import AddStudyContainer from './Layout/AddStudyContainer';
import { ColorProps, TargetProps } from '../interface';
import { useSelector } from 'react-redux';
import { rootState } from '../../../redux';

const Target: React.FC<TargetProps> = ({ target, setTarget }) => {
  const { state } = useSelector(({ dataReducer }: rootState) => ({
    state: dataReducer.state,
  }));

  const onPress = (id: number) => setTarget(id);

  return (
    <AddStudyContainer title="모집대상">
      <Container>
        {state.map(({ id, name }: { id: number; name: string }) => (
          <Content
            key={id}
            onPress={() => onPress(id)}
            color={id === target}
            activeOpacity={0.8}
          >
            <Title color={id === target}>{name}</Title>
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
