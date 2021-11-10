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
  studyInProgressList: any;
  studyMemberList: [];
}

const initialState = {
  studyInProgressList: [],
  studyMemberList: [],
};

const studyInProgress = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:4000/report/getReportList',
    headers: { Authorization: token },
  });
  // console.log(`reducer 스터디 :  `, token);
  return response;
};

const studyMember = async (token: string, studyId: number) => {
  const response = await axios({
    method: 'get',
    url: `http://localhost:4000/report/getReportInfo/${studyId}/`,
    headers: { Authorization: token },
  });
  // console.log('reducer 스터디 멤버', response.data.member);
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
        draft.studyMemberList = action.payload.member;
        break;
      case POST_REPORT_SUCCESS:
        // 이런건 리덕스로 처리하면 안된다.
        break;
      default:
        break;
    }
  });
}

export default reportReducer;
