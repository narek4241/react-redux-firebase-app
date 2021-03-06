import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { formatDateToCalendarTime } from '../../helper';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  const formattedDate = formatDateToCalendarTime(
    project ? project.createdAt.seconds * 1000 : null
  );

  return (
    <div className="project-details section container">
      {project ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{project.title}</div>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstname} {project.authorLastname}
            </div>
            <div>{formattedDate}</div>
          </div>
        </div>
      ) : (
        <p className="center">Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
