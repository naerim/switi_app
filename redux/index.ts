import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import studyReducer, { IStudyState } from './studyReducer';
import userReducer, { IUserState } from './userReducer';
import searchReducer, {ISearchState} from "./searchReducer";
export interface rootState {
  studyReducer: IStudyState;
  userReducer: IUserState;
  searchReducer: ISearchState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({ studyReducer, userReducer, searchReducer });

export default persistReducer(persistConfig, rootReducer);
