import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import studyReducer, { IStudyState } from './studyReducer';
import userReducer, { IUserState } from './userReducer';
import dataReducer, { IDataState } from './dataReducer';
import manageReducer, { IManageState } from './manageReducer';
import searchReducer, { ISearchState } from './search/searchReducer';
import reportReducer, { IReportState } from './report/reportReducer';
import evaluateReducer, { IEvaluationState } from './evaluationReducer';
import withdrawalReducer, { IWithdrawalState } from './authReducer';

export interface rootState {
  studyReducer: IStudyState;
  userReducer: IUserState;
  dataReducer: IDataState;
  manageReducer: IManageState;
  searchReducer: ISearchState;
  reportReducer: IReportState;
  evaluateReducer: IEvaluationState;
  withdrawalReducer: IWithdrawalState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  studyReducer,
  userReducer,
  searchReducer,
  dataReducer,
  manageReducer,
  reportReducer,
  evaluateReducer,
  withdrawalReducer,
});

export default persistReducer(persistConfig, rootReducer);
