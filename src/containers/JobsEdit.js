import React from 'react';
import Textarea from 'react-textarea-autosize';
import { jobsActions, jobsSelectors } from '../store/jobs/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

@connect(
  (state, props) => {
    return {
      job: jobsSelectors.getJob(state, props.params.jobId),
    };
  }
)
export class JobsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    job: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      jobId: this.props.params.jobId,
      // job: {title: '', body: ''}
      job: {title: '', description: '', category: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.job, this.state.job)) {
      this.setState({...this.state, job: nextProps.job});
    }
  }

  componentDidMount() {
    if (this.state.jobId) {
      this.context.store.dispatch(jobsActions.fetchJob(this.props.params.jobId));
    }
  }

  handleChange(field, e) {
    const job = Object.assign({}, this.state.job, {[field]: e.target.value});
    console.log('job', job);
    this.setState(Object.assign({}, this.state, {job}));
  }

  handleSubmit() {
    if (this.state.jobId) {
      this.context.store.dispatch(jobsActions.updateJob(this.state.job));
    } else {
      this.context.store.dispatch(jobsActions.createJob(this.state.job));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={this.state.job.title}
            onChange={this.handleChange.bind(this, 'title')} />
        </div>

        <div className="form-group">
          <label className="label-control">Description</label>
          <Textarea
            className="form-control"
            value={this.state.job.description}
            onChange={this.handleChange.bind(this, 'description')} />
        </div>

        <div className="form-group">
          <label className="label-control">Category</label>
          <Textarea
            className="form-control"
            value={this.state.job.category}
            onChange={this.handleChange.bind(this, 'category')} />
        </div>

        <button type="submit" className="btn btn-default">
          {this.state.jobId ? 'Update' : 'Create' } Job
        </button>
      </form>
    );
  }
}
