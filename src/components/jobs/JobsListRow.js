import React from 'react';
import { Link } from 'react-router';

export const JobsListRow = ({job, onDelete}) => {
  return (
    <tr key={job.id}>
      <td>{job.id}</td>
      <td>{job.title}</td>
      <td>{job.description}</td>
      <td>{job.category}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/jobs/${job.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, job)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};
