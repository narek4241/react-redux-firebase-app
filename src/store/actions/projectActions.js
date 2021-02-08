export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // #note #good async/await or then chaining, CIY(Choice Is Yours) opt2
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstname: 'User2',
        authorLastname: 'Useryan',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: 'CREATE_PROJECT',
          payload: {
            project,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          payload: {
            error,
          },
        });
      });
  };
};
