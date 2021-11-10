import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { useGoManageRecruit } from '../../util/navigationHooks';
import EvaluationRadio from './component/EvaluationRadio';
import EvaluationConfirm from './component/EvaluationConfirm';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  evaluateProfileRequest,
  evaluateRequest,
} from '../../redux/evaluationReducer';
import BasicButton from '../../Component/BasicButton';
import FinalModal from '../Report/details/finalModal';

const Evaluation = ({ route }: any) => {
  const studyId = route.params.studyId;
  const memberId = route.params.memberId;
  const title = route.params.title;

  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));

  const { evaluateProfile } = useSelector((state: rootState) => ({
    evaluateProfile: state.evaluateReducer.evaluateProfile,
  }));

  useEffect(() => {
    dispatch(evaluateProfileRequest(login.token, 18, 24));
  }, [dispatch]);

  let nickname = '스터디원';
  nickname = evaluateProfile?.user.nickname;

  const GoManageRecruit = useGoManageRecruit(studyId, title);
  const [checked, setChecked] = useState({
    participation: null,
    appointment: null,
    communication: null,
  });

  const handleEvaluate = () => {
    setConfirmVisible(false);
    dispatch(
      evaluateRequest(
        login.token,
        memberId,
        studyId,
        checked['participation'],
        checked['appointment'],
        checked['communication']
      )
    );
    setTimeout(() => {
      setFinalVisible(true);
    }, 500);
  };

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);

  return (
    <Container>
      <BasicHeader
        title={'상호평가'}
        onPress={GoManageRecruit}
        display={true}
      />
      <Content>
        <Text>
          평가결과는 모든 스터디원 평가 점수를 평균으로 환산하여 상대방의 당도에
          반영됩니다.
        </Text>
        <OpponentContainer>
          <OpponentImg></OpponentImg>
          <OpponentText>{nickname}</OpponentText>
        </OpponentContainer>
        <EvaluationRadio
          title="participation"
          checkedValue={checked['participation']}
          setChecked={setChecked}
          name={nickname}
          question="님은 스터디에 성실히 참여했나요?"
        />
        <EvaluationRadio
          title="appointment"
          checkedValue={checked['appointment']}
          setChecked={setChecked}
          name={nickname}
          question="님은 시간약속을 잘 지키셨나요?"
        />
        <EvaluationRadio
          title="communication"
          checkedValue={checked['communication']}
          setChecked={setChecked}
          name={nickname}
          question="님과의 소통이 원활히 이루어졌나요?"
        />
        <BasicButton
          text="평가 완료하기"
          onPress={() => setConfirmVisible(true)}
          disabled={
            !checked['participation'] ||
            !checked['appointment'] ||
            !checked['communication']
          }
        />
        <EvaluationConfirm
          modalVisible={confirmVisible}
          closeModal={() => setConfirmVisible(false)}
          onPressConfirm={handleEvaluate}
        />
        <FinalModal
          modalVisible={finalVisible}
          closeModal={() => setFinalVisible(false)}
          title="평가가 완료되었습니다!"
          content="상대방 당도에 평가가 반영 됩니다."
        />
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.ScrollView`
  flex: 12;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 26px;
`;

const Text = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const OpponentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

const OpponentImg = styled.View`
  background-color: #d1d1d1;
  width: 46px;
  height: 46px;
  border-radius: 50px;
  margin-right: 10px;
`;

const OpponentText = styled.Text`
  font-size: 16px;
`;

export default Evaluation;
