import produce from 'immer';
import {
  POST_STUDY_LIST,
  POST_STUDY_LIST_SUCCESS,
  POST_STUDY_LIST_FAILURE, //에러는 나중에 추가..
  GET_SEARCH_HISTORY_LIST,
  GET_SEARCH_HISTORY_LIST_SUCCESS,
  GET_SEARCH_HISTORY_LIST_FAILURE,
  DELETE_ALL_SEARCH_HISTORY,
  DELETE_ALL_SEARCH_HISTORY_SUCCESS,
  DELETE_ALL_SEARCH_HISTORY_FAILURE,
  DELETE_SEARCH_HISTORY,
  DELETE_SEARCH_HISTORY_SUCCESS,
  DELETE_SEARCH_HISTORY_FAILURE,
  REFRESH_STUDY_LIST_SUCCESS,
  REFRESH_STUDY_LIST,
} from '../action';
import axios from 'axios';
import createRequestThunk from '../lib/createRequestThunk';
import { searchAllDelete, searchDelete } from './search.api';

export interface ISearchState {
  searchStudyList: [];
  searchHistoryList: [];
} // 타입 지정

const initialState = {
  searchStudyList: null,
  searchHistoryList: [],
  //filter 돌리기 위해 null-> []
}; // 기본 상태

// 검색하기 + 검색어저장
const search = async (token: string, keyword: string) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/search/searchStudy',
    headers: { Authorization: token },
    data: { keyword: keyword },
  });
  // console.log(`검색 완료 ${JSON.stringify(response)}`);
  return response;
};

const searchHistory = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:4000/search/getSearch',
    headers: { Authorization: token },
  });
  console.log('리듀서 검색 변경', response.data);
  return response;
};

export const searchRequest = createRequestThunk(POST_STUDY_LIST, search);
export const searchHistoryRequest = createRequestThunk(
  GET_SEARCH_HISTORY_LIST,
  searchHistory
);

export const searchDeleteThunk = (token: string, historyId: number) => async (
  dispatch: any
) => {
  const response = await searchDelete(token, historyId);
  if (response.data.result)
    dispatch({ type: DELETE_SEARCH_HISTORY_SUCCESS, meta: { historyId } });
};

export const searchAllDeleteThunk = (token: string) => async (
  dispatch: any
) => {
  const response = await searchAllDelete(token);
  if (response.data.result)
    dispatch({ type: DELETE_ALL_SEARCH_HISTORY_SUCCESS });
};

function searchReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_STUDY_LIST_SUCCESS:
        draft.searchStudyList = action.payload.study;
        break;
      case REFRESH_STUDY_LIST_SUCCESS:
        draft.searchStudyList = initialState.searchStudyList;
        break;
      case GET_SEARCH_HISTORY_LIST_SUCCESS:
        draft.searchHistoryList = action.payload.search;
        break;
      case DELETE_ALL_SEARCH_HISTORY_SUCCESS:
        draft.searchHistoryList = initialState.searchHistoryList;
        break;
      case DELETE_SEARCH_HISTORY_SUCCESS:
        draft.searchHistoryList = state.searchHistoryList.filter(
          (history: any) => history.id !== action.meta.historyId
        );
        break;
      default:
        break;
    }
  });
}

export default searchReducer;
