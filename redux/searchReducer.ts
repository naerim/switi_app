import produce from "immer";
import {
  POST_STUDY_LIST,
  POST_STUDY_LIST_SUCCESS,
  POST_STUDY_LIST_FAILURE
} from "./action";
import axios from "axios";
import createRequestThunk from "./lib/createRequestThunk";

export interface ISearchState {
  search: any;
  searchError: any;
}

// 검색
const search = async (token: string, keyword: string) => {
  console.log("검색", token, keyword);

  const response = await axios({
    method: 'post',
    url: 'http://localhost:4000/search/searchStudy',
    headers: { Authorization: token },
    data: { keyword: keyword },
  });
  console.log(`검색결과1 : ${response}`);
  console.log(`검색결과2 : ${response.data}`);
  console.log(`검색결과3 : ${response.data.study}`);

  return response.data.study;
};

export const searchRequest = createRequestThunk(POST_STUDY_LIST, search);

const initialState = {
  search: null
};

export interface ISearchState {
  search: any;
}

function searchReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_STUDY_LIST:
        draft.search = action.payload;
        break;
      default:
        break;
    }
  });
}

export default searchReducer;
