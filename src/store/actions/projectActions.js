export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // some async statement
    dispatch({
      type: 'CREATE_PROJECT',
      payload: {
        project,
      },
    });
  };
};
