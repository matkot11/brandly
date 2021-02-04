import { firestore } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { getError } from 'redux/error/errorSlice';
import { getMessage } from 'redux/message/messageSlice';

const useCollection = (collection) => {
  const dispatch = useDispatch();
  let docId;
  const addDoc = async (doc) => {
    await firestore
      .collection(collection.uid)
      .add(doc)
      .then((docRef) => {
        docId = docRef.id;
      })
      .then(() => {
        firestore.collection(collection.uid).doc(docId).update({
          id: docId,
        });
      })
      .then(() => {
        dispatch(getError(false));
        dispatch(getMessage('Item was added successfully to the cart'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      })
      .catch(() => {
        dispatch(getError(true));
        dispatch(getMessage('Item could not be added to cart'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      });
  };

  return { addDoc };
};

export default useCollection;
