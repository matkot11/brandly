import { useState } from 'react';
import { auth } from 'firebase/config';

const getUser = () => {
  const [user, isUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((_user) => {
    isUser(_user);
  });

  return { user };
};

export default getUser;
