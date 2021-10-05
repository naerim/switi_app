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
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface ISearchState {
  searchStudyList: [];
  searchHistoryList: [];
}

// 검색하기 + 검색어저장
const search = async (token: string, keyword: string) => {
  // console.log('검색', token, keyword);
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
  console.log(
    `검색기록출력확인해보자 at searchReducer 51 ${JSON.stringify(response)}`
  );
  return response;
};

//검색 기록 모두 삭제
const searchAllDelete = async (token: string) => {
  const response = await axios({
    method: 'delete',
    url: 'http://localhost:4000/search/deleteAll',
    headers: { Authorization: token },
  });
  console.log(
    `검색기록삭제확인해보자 at searchReducer 51 ${JSON.stringify(response)}`
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

const initialState = {
  searchStudyList: null,
  searchHistoryList: null,
  searchAllDelete: null,
};

// export interface ISearchState {
//   searchStudyList: [];
// }

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
      //삭제는 searchHistoryList 같이 써야 하나..?
      default:
        break;
    }
  });
}

export default searchReducer;
