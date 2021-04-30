import React from 'react';
import styled from 'styled-components/native';
import { ContentProps } from '../../interface';

const AddStudyContainer: React.FC<ContentProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <Container>
      <Title>
        {title} <SubTitle>{subTitle}</SubTitle>
      </Title>
      {children}
    </Container>
  );
};

const Container = styled.View`
  min-height: 60px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-bottom: 2%;
`;

const SubTitle = styled.Text`
  color: #e3e3e3;
  font-size: 10px;
  align-items: flex-end;
`;

export default AddStudyContainer;
