import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchJob(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchJobSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchJobs(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchJobsSuccess(jobs, params) {
  const byId = keyBy(jobs, (job) => job.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createJob(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createJobSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updateJob(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updateJobSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deleteJob(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deleteJobSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}
