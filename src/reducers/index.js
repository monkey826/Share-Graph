import { combineReducers } from 'redux';
import CompareReducer from './compare-reducer';
import PerformanceReducer from './performance-reducer';

const rootReducer = combineReducers({
  compare: CompareReducer,
  performance : PerformanceReducer
});

export default rootReducer;
