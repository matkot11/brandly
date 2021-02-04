import { useState } from 'react';
import { firestore } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { getMessage } from 'redux/message/messageSlice';
import { getError } from 'redux/error/errorSlice';

const getCollection = () => {
  const [results, getResults] = useState(null);
  const [total, getTotal] = useState(0);
  const result = [];
  let sum = 0;
  const dispatch = useDispatch();

  const loadData = async (_collection) => {
    await firestore
      .collection(_collection)
      .get()
      .then((snap) => {
        snap.docs.forEach((doc) => {
          result.push(doc.data());
          sum += doc.data().price;
        });
        getResults(result);
        getTotal(sum);
      })
      .catch(() => {
        dispatch(getError(true));
        dispatch(getMessage('Data could not be loaded'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      });
  };

  return { loadData, results, total };
};

export default getCollection;
