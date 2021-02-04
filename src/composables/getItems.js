import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getError } from 'redux/error/errorSlice';
import { getMessage } from 'redux/message/messageSlice';

const getItems = (link) => {
  const [data, getData] = useState(null);
  const dispatch = useDispatch();

  const load = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${link}`)
      .then((res) => {
        getData(res.data);
      })
      .catch(() => {
        dispatch(getError(true));
        dispatch(getMessage('Products could not be loaded'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      });
  };

  return { load, data };
};

export default getItems;
