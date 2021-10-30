import React from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import BasicModal from '../../../Component/BasicModal';
import BasicButton from '../../../Component/BasicButton';
import ApplyInfo from './ApplyInfo';
import { ManageType } from '../../ManageProceeding/interface';
import TwoButton from './TwoButton';

interface Props {
  item: ManageType;
  modalVisible: boolean;
  closeModal: () => void;
}

const RecruitModal: React.FC<Props> = ({ item, modalVisible, closeModal }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <Wrap>
          <Title>해당 대기자를 수락하시겠습니까?</Title>
        </Wrap>
        <ApplyInfo
          img={item.profilepath}
          nickname={item.User.nickname}
          desc={item.apply_detail}
        />
        <ButtonWrap>
          <TwoButton
            accept={false}
            onPress={() => console.log('거절')}
            title="거절하기"
          />
          <TwoButton
            accept
            onPress={() => console.log('수락')}
            title="수락하기"
          />
        </ButtonWrap>
      </BasicModal>
    </Container>
  );
};

const Container = styled.View``;

const Wrap = styled.View`
  padding-top: 28px;
  padding-bottom: 50px;
  align-items: center;
`;

const Title = styled.Text`
  color: #2b2b2b;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonWrap = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export default RecruitModal;
