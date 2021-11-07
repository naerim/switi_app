import produce from 'immer';
import {
  GET_EVALUATE_PROFILE,
  GET_EVALUATE_PROFILE_SUCCESS,
  GET_EVALUATE,
  GET_EVALUATE_SUCCESS,
} from './action';
import axios from 'axios';
import createRequestThunk from '../lib/createRequestThunk';

export interface IEvaluationState {
  evaluateProfile: any;
  // evaluate: []; // 필요할까?
}

const initialState = {
  evaluateProfile: null,
};

const evaluateProfile = async (
  token: string,
  idMember: number,
  idStudy: number
) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:4000/evaluate/?idMember=${idMember}&idStudy=${idStudy}`,
    headers: { Authorization: token },
  });
  // console.log(`reducer evaluationProfile :  `, response.data);
  return response;
};

const evaluate = async (token: string, studyId: number) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:4000/evaluate/peerEvaluate`,
    headers: { Authorization: token },
  });
  // console.log(`reducer evaluation :  `, response.data);
  return response;
};

const report = async (
  token: string,
  studyId: number,
  memberId: number,
  content: string
) => {
  const response = await axios({
    method: 'post',
    url: `http://localhost:4000/report/reportUser/${studyId}/${memberId}`,
    headers: { Authorization: token },
    data: { content: content },
  });
  // console.log('reducer 신고하기', response.data);
  return response;
};
