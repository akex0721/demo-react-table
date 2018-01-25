import React from 'react';
import { JobsListRow } from './JobsListRow';

export const JobsList = ({jobs, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {jobs.map(job => JobsListRow({job, onDelete}))}
      </tbody>
    </table>
  )
};
