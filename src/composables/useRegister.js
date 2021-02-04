import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from 'firebase/config';

const useRegister = () => {
  const history = useHistory();
  const [error, getError] = useState(null);
  const register = async (email, password, repeatPassword) => {
    if (password === repeatPassword) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => history.goBack())
        .catch((err) => getError(err.message));
    } else {
      getError('Passwords do not match');
    }
  };

  return { error, register };
};

export default useRegister;
