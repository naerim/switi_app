import React from 'react';
import ReportContainer from '../../../Component/MypageContainer';
import { useGoMyPage } from '../../../util/navigationHooks';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Report = () => {
  const goMyPage = useGoMyPage();

  return (
    <ReportContainer onPress={goMyPage} display headerTitle="공지사항">
      <ReportInnerContainer>
        <Text>Report</Text>
      </ReportInnerContainer>
    </ReportContainer>
  );
};

const ReportInnerContainer = styled.ScrollView`
  flex: 1;
`;

export default Report;
