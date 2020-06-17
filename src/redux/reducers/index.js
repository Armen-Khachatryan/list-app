import { combineReducers } from 'redux';

import prosListReducer from './prosListReducer';
import consListReducer from './consListReducer';

export default combineReducers({
  prosList: prosListReducer,
  consList: consListReducer
});
