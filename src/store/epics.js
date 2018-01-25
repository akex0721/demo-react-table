import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as jobsEpics from './jobs/epics';

export default combineEpics(
  ...values(jobsEpics)
);
