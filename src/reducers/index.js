import { combineReducers } from 'redux';
import CompareReducer from './compare-reducer';
import PerformanceReducer from './performance-reducer';
import AppReducer from './app-reducer';
const rootReducer = combineReducers({
  compare: CompareReducer,
  performance : PerformanceReducer,
  menu : AppReducer
});

export default rootReducer;
