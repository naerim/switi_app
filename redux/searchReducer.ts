import produce from 'immer';
import {
  POST_STUDY_LIST,
  POST_STUDY_LIST_SUCCESS,
  POST_STUDY_LIST_FAILURE, //에러는 나중에 추가..
  GET_SEARCH_HISTORY_LIST,
  GET_SEARCH_HISTORY_LIST_SUCCESS,
  GET_SEARCH_HISTORY_LIST_FAILURE,
  DELETE_STUDY_ALL_DELETE,
  DELETE_STUDY_ALL_DELETE_SUCCESS,
  DELETE_STUDY_ALL_DELETE_FAILURE,
  DELETE_STUDY_DELETE,
  DELETE_STUDY_DELETE_SUCCESS,
  DELETE_STUDY_DELETE_FAILURE,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface ISearchState {
  searchStudyList: [];
  searchHistoryList: [];
} // 타입 지정

const initialState = {
  searchStudyList: null,
  searchHistoryList: null,
  searchAllDelete: null,
}; // 기본 상태

// 검색하기 + 검색어저장
const search = async (token: string, keyword: string) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/search/searchStudy',
    headers: { Authorization: token },
    data: { keyword: keyword },
  });
  return response;
};

//검색 기록 출력
const searchHistory = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:4000/search/getSearch',
    headers: { Authorization: token },
  });
  return response;
};

//검색 기록 모두 삭제
const searchAllDelete = async (token: string) => {
  const response = await axios({
    method: 'delete',
    url: 'http://localhost:4000/search/deleteAll',
    headers: { Authorization: token },
  });
  return response;
};

//검색 기록 하나 삭제
const searchDelete = async (token: string, id: number) => {
  const response = await axios({
    method: 'delete',
    url: `/deleteOne/${id}`,
    headers: { Authorization: token },
  });
  console.log(
    `검색기록하나삭제확인해보자 at searchReducer 51 ${JSON.stringify(response)}`
  );
  return response;
};

export const searchRequest = createRequestThunk(POST_STUDY_LIST, search);
export const searchHistoryRequest = createRequestThunk(
  GET_SEARCH_HISTORY_LIST,
  searchHistory
);
export const searchAllDeleteRequest = createRequestThunk(
  DELETE_STUDY_ALL_DELETE,
  searchAllDelete
);
export const searchDeleteRequest = createRequestThunk(
  DELETE_STUDY_DELETE,
  searchDelete
);

function searchReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_STUDY_LIST_SUCCESS:
        draft.searchStudyList = action.payload.study;
        break;
      case GET_SEARCH_HISTORY_LIST_SUCCESS:
        draft.searchHistoryList = action.payload.search;
        break;
      case DELETE_STUDY_ALL_DELETE_SUCCESS:
        draft.searchAllDelete = action.payload.search;
        break;
      case DELETE_STUDY_DELETE_SUCCESS:
        draft.searchDelete = action.payload.search;
        break;
      default:
        break;
    }
  });
}

export default searchReducer;
