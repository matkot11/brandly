import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from 'firebase/config';

const useLogin = () => {
  const history = useHistory();
  const [error, getError] = useState(null);
  const login = async (email, password) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.goBack())
      .catch((err) => getError(err.message));
  };

  return { error, login };
};

export default useLogin;
