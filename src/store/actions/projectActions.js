export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // #note #good async/await or then chaining, CIY(Choice Is Yours) opt2
    const firestore = getFirestore();
    const { firstname, lastname } = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstname: firstname,
        authorLastname: lastname,
        authorId,
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
