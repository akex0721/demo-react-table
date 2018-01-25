import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as jobsActions from './actionCreators';

export function fetchJob(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/jobs/${id}`)
      ).map(res => jobsActions.fetchJobSuccess(res.data));
    });
}

export function fetchJobs(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/jobs?${querystring.stringify(params)}`)
      ).map(res => jobsActions.fetchJobsSuccess(res.data, params));
    });
}

export function updateJob(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(job => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8081/jobs/${job.id}`, job)
        ).map(res => jobsActions.updateJobSuccess(res.data)),
        Observable.of(push('/jobs'))
      );
    });
}

export function createJob(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(job => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8081/jobs`, job)
        ).map(res => jobsActions.createJobSuccess(res.data)),
        Observable.of(push('/jobs'))
      );
    });
}

export function deleteJob(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(job => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8081/jobs/${job.id}`)
      ).map(res => jobsActions.deleteJobSuccess(job));
    });
}
