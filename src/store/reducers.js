import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import jobs from './jobs/reducer';

export default combineReducers({
  auth,
  jobs,
  routing: routerReducer,
});
