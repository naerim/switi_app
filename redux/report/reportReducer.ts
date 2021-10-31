import produce from 'immer';
import {
  GET_STUDY_IN_PROGRESS,
  GET_STUDY_IN_PROGRESS_SUCCESS,
  GET_STUDY_MEMBER,
  GET_STUDY_MEMBER_SUCCESS,
  POST_REPORT,
  POST_REPORT_SUCCESS,
} from '../action';
import axios from 'axios';
import createRequestThunk from '../lib/createRequestThunk';

export interface IReportState {
  studyInProgressList: [];
  studyMemberList: [];
}

const initialState = {
  studyInProgressList: null,
  studyMemberList: null,
};

const studyInProgress = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:4000/report/getReportList',
    headers: { Authorization: token },
  });
  return response;
};

const studyMember = async (
  token: string,
  studyId: number,
  memberId: number
) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:4000/report/getReportInfo/${studyId}${memberId}/`,
    headers: { Authorization: token },
  });
  return response;
};

const report = async (token: string, studyId: number) => {
  const response = await axios({
    method: 'post',
    url: `http://localhost:4000/report/getReportInfo/${studyId}`,
    headers: { Authorization: token },
  });
  return response;
};

export const studyInProgressRequest = createRequestThunk(
  GET_STUDY_IN_PROGRESS,
  studyInProgress
);

export const studyMemberRequest = createRequestThunk(
  GET_STUDY_MEMBER,
  studyMember
);

export const reportRequest = createRequestThunk(POST_REPORT, report);

function reportReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDY_IN_PROGRESS_SUCCESS:
        draft.studyInProgressList = action.payload.study;
        break;
      case GET_STUDY_MEMBER_SUCCESS:
        draft.studyMemberList = action.payload.study.members;
        //study.member이 맞을까?
        break;
      case POST_REPORT_SUCCESS:
        draft.studyMemberList = action.payload;
        // 어떤 데이터에 변화가 ?
        break;
      default:
        break;
    }
  });
}

export default reportReducer;
