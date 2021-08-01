import React from 'react';
import styled from 'styled-components/native';
import ScrapHeader from './Scrap_Header';
import { Platform } from 'react-native';
interface Props {
  headerTitle: string;
  display: boolean;
  onPress?: () => void;
  count?: number;
  scroll?: boolean;
}

const ScrapContainer: React.FC<Props> = ({
  children,
  headerTitle,
  onPress,
  display,
  count,
  scroll,
}) => {
  return (
    <Wrap style={{ paddingTop: Platform.OS === 'ios' ? 20 : 70 }}>
      <ScrapHeader
        title={headerTitle}
        onPress={onPress}
        display={display}
        count={count}
      />
      {scroll ? <Line /> : <Nothing />}
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 12;
  background-color: #fff;
`;

const Line = styled.View`
  height: 1px;
  background-color: #d8d8d8;
`;
const Nothing = styled.View``;

export default ScrapContainer;
