import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { JobsList } from '../components/jobs/JobsList';
import { SearchInput } from '../components/shared/SearchInput';
import { jobsActions, jobsSelectors } from '../store/jobs/index';

@connect(
  (state) => {
    return {
      params: jobsSelectors.getParams(state),
      jobs: jobsSelectors.getJobs(state),
    };
  }
)
export class JobsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deleteJob = this.deleteJob.bind(this);
    this.handleSearch = this.handleSearch.bind(this, 'title_like');
  }

  componentDidMount() {
    this.fetchJobs({});
  }

  fetchJobs(params) {
    this.context.store.dispatch(jobsActions.fetchJobs(params));
  }

  deleteJob(job) {
    this.context.store.dispatch(jobsActions.deleteJob(job));
  }

  handleSearch(field, value) {
    this.fetchJobs({q: value})
  }

  render() {
    const {
      params,
      jobs,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput
              value={params.q}
              onSearch={this.handleSearch}
              placeholder="Title search ..."
            />
          </div>
          <div className="col-md-6 text-right">
            <Link to="/jobs/new" className="btn btn-primary">New Job</Link>
          </div>
        </div>
        {jobs.length > 0 &&
        <JobsList jobs={jobs} onDelete={this.deleteJob}/>}
      </div>
    );
  }
}
