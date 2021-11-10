import produce from 'immer';
import {
  GET_EVALUATE_PROFILE,
  GET_EVALUATE_PROFILE_SUCCESS,
  GET_EVALUATE_PROFILE_FAILURE,
  GET_EVALUATE,
  GET_EVALUATE_SUCCESS,
  GET_EVALUATE_FAILURE
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface IEvaluationState {
  evaluateProfile: any;
  evaluate: []; // 필요할까?
}

const initialState = {
  evaluateProfile: null,
  evaluate: null,
};

const getEvaluateProfile = async (
  token: string,
  idMember: number,
  idStudy: number
) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:4000/evaluate/evaluatePage?idMember=${idMember}&idStudy=${idStudy}`,
    headers: { Authorization: token },
  });
  // console.log(`reducer evaluationProfile :  `, response.data);
  return response;
};

const evaluate = async (
  token: string,
  idMember: number,
  idStudy: number,
  score1: number,
  score2: number,
  score3: number
) => {
  const response = await axios({
    method: 'post',
    url: `http://localhost:4000/evaluate/peerEvaluate?idMember=${idMember}&idStudy=${idStudy}`,
    headers: { Authorization: token },
    data: { score1: score1, score2: score2, score3: score3 },
  });
  console.log(`reducer evaluation :  `, response.data);
  return response;
};

export const evaluateProfileRequest = createRequestThunk(
  GET_EVALUATE_PROFILE,
  getEvaluateProfile
);

export const evaluateRequest = createRequestThunk(GET_EVALUATE, evaluate);

function evaluateReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_EVALUATE_PROFILE_SUCCESS:
        draft.evaluateProfile = action.payload;
        break;
      case GET_EVALUATE_SUCCESS:
        break;
      default:
        break;
    }
  });
}

export default evaluateReducer;
