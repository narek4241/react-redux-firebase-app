export const createProject = (project) => {
  return (dispatch, getState) => {
    // some async statement
    dispatch({
      type: 'CREATE_PROJECT',
      payload: {
        project,
      },
    });
  };
};
