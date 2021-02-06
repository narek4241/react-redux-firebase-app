import React from 'react';

const ProjectDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div className="project-details section container">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the User</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
