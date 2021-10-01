import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import studyReducer, { IStudyState } from './studyReducer';
import userReducer, { IUserState } from './userReducer';
import dataReducer, { IDataState } from './dataReducer';
import manageReducer, { IManageState } from './manageReducer';

export interface rootState {
  studyReducer: IStudyState;
  userReducer: IUserState;
  dataReducer: IDataState;
  manageReducer: IManageState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  studyReducer,
  userReducer,
  dataReducer,
  manageReducer,
});

export default persistReducer(persistConfig, rootReducer);
