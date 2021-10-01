import produce from 'immer';
import {
  GET_MY_APPLY_LIST,
  GET_MY_APPLY_LIST_SUCCESS,
  GET_MY_STUDY_LIST,
  GET_MY_STUDY_LIST_SUCCESS,
  GET_STUDY_MEM_LIST,
  GET_STUDY_MEM_LIST_SUCCESS,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

// 내 모집글
const getMyStudyList = async (token: string) => {
  const response = axios({
    method: 'get',
    url: 'http://localhost:4000/manage/myStudyList',
    headers: { Authorization: token },
  });
  return response;
};
export const getMyStudyListRequest = createRequestThunk(
  GET_MY_STUDY_LIST,
  getMyStudyList
);

// 진행중
const getMyApplyList = async (token: string) => {
  const response = axios({
    method: 'get',
    url: 'http://localhost:4000/manage/myApplyList',
    headers: { Authorization: token },
  });
  return response;
};
export const getMyApplyListRequest = createRequestThunk(
  GET_MY_APPLY_LIST,
  getMyApplyList
);

// 스터디원 관리
const getStudyMember = async (token: string, id: number) => {
  const response = axios({
    method: 'get',
    url: `http://localhost:4000/manage/studyMemList/${id}`,
    headers: { Authorization: token },
  });
  return response;
};
export const getStudyMemberRequest = createRequestThunk(
  GET_STUDY_MEM_LIST,
  getStudyMember
);

const initialState = {
  myStudyList: null,
  myApplyList: null,
  studyMember: null,
};

export interface IManageState {
  myStudyList: [];
  myApplyList: [];
  studyMember: any;
}

function manageReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_MY_STUDY_LIST_SUCCESS:
        draft.myStudyList = action.payload.study;
        break;
      case GET_MY_APPLY_LIST_SUCCESS:
        draft.myApplyList = action.payload.study;
        break;
      case GET_STUDY_MEM_LIST_SUCCESS:
        draft.studyMember = action.payload;
        break;
      default:
        break;
    }
  });
}

export default manageReducer;
