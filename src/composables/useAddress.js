import { firestore } from 'firebase/config';
import getUser from 'composables/getUser';
import { useHistory } from 'react-router-dom';

const useAddress = () => {
  const { user } = getUser();
  const history = useHistory();
  const addAddress = async (doc) => {
    await firestore
      .collection('address')
      .doc(user.uid)
      .set(doc)
      .then(() => {
        history.push('/cart/payment');
      });
  };

  return { addAddress };
};

export default useAddress;
