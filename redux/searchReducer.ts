import produce from 'immer';
import {
  POST_STUDY_LIST,
  POST_STUDY_LIST_SUCCESS,
  POST_STUDY_LIST_FAILURE, //에러는 나중에 추가..
} from './action';
import axios from 'axios';
import createRequestThunk from './lib/createRequestThunk';

export interface ISearchState {
  searchStudyList: [];
}

// 검색 api -> 확인
const search = async (token: string, keyword: string) => {
  console.log('검색', token, keyword);

  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/search/searchStudy',
    headers: { Authorization: token },
    data: { keyword: keyword },
  });
  console.log(`검색결과3 : ${JSON.stringify(response.data.study)}`);
  return response; //
};

export const searchRequest = createRequestThunk(POST_STUDY_LIST, search);

const initialState = {
  searchStudyList: null,
};

export interface ISearchState {
  searchStudyList: [];
}

function searchReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_STUDY_LIST_SUCCESS:
        draft.searchStudyList = action.payload.study;
        break;
      default:
        break;
    }
  });
}

export default searchReducer;
