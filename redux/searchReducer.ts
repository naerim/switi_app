import produce from 'immer';
import {
  POST_STUDY_LIST,
  POST_STUDY_LIST_SUCCESS,
  POST_STUDY_LIST_FAILURE, //에러는 나중에 추가..
  GET_SEARCH_HISTORY_LIST,
  GET_SEARCH_HISTORY_LIST_SUCCESS,
  GET_SEARCH_HISTORY_LIST_FAILURE,
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface ISearchState {
  searchStudyList: [];
  searchHistoryList: [];
}

// 검색하기 + 검색어저장
const search = async (token: string, keyword: string) => {
  console.log('검색', token, keyword);

  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/search/searchStudy',
    headers: { Authorization: token },
    data: { keyword: keyword },
  });
  console.log(`검색결과확인: ${JSON.stringify(response.data.study)}`);
  return response;
};

//검색 기록 출력
export const SearchHistoryRequest = (token: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(`http://localhost:4000/search/getSearch`, {
      headers: { Authorization: `${token}` },
    });
    if (response.data) {
      dispatch({
        type: GET_SEARCH_HISTORY_LIST,
        payload: response.data,
      });
    } else {
      console.log('검색기록을 받아오지 못했습니다. ');
    }
  };
};

export const searchRequest = createRequestThunk(POST_STUDY_LIST, search);

const initialState = {
  searchStudyList: null,
  searchHistoryList: null,
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
        draft.searchStudyList = action.payload;
        break;
      default:
        break;
    }
  });
}

export default searchReducer;
