export function getParams(state) {
  return state.jobs.params;
}

export function getJob(state, id) {
  return state.jobs.byId[id];
}

export function getJobs(state) {
  return Object.values(state.jobs.byId);
}
