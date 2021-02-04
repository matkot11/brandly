import { auth } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { getError } from 'redux/error/errorSlice';
import { getMessage } from 'redux/message/messageSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    auth.signOut().catch(() => {
      dispatch(getError(true));
      dispatch(getMessage('You logged out'));
      setTimeout(() => {
        dispatch(getMessage(''));
      }, 10000);
    });
  };

  return { logout };
};

export default useLogout;
