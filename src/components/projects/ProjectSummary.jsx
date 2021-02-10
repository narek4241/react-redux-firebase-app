import React from 'react';
import { formatDateToCalendarTime } from '../../helper';

const ProjectSummary = ({ project }) => {
  const formattedDate = formatDateToCalendarTime(
    project.createdAt.seconds * 1000
  );

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.authorFirstname} {project.authorLastname}
        </p>
        <p className="grey-text">{formattedDate}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
