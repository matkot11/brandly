import React from 'react';
import PropTypes from 'prop-types';
import { firestore } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { getMessage } from 'redux/message/messageSlice';
import { getError } from 'redux/error/errorSlice';
import getUser from 'composables/getUser';
import TextButton from 'components/atoms/TextButton/TextButton';
import Heading from 'components/atoms/Heading/Heading';
import {
  StyledHeading,
  StyledImg,
  StyledInnerWrapper,
  StyledWrapper,
} from './CartItem-styles';

const CartItem = ({ image, name, price, id }) => {
  const { user } = getUser();
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    firestore
      .collection(user.uid)
      .doc(id)
      .delete()
      .then(() => {
        dispatch(getError(false));
        dispatch(getMessage('Item successfully deleted'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      })
      .catch(() => {
        dispatch(getError(true));
        dispatch(getMessage('Item could not be deleted'));
        setTimeout(() => {
          dispatch(getMessage(''));
        }, 10000);
      });
  };

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledImg src={image} alt="item" />
        <StyledHeading>{name}</StyledHeading>
      </StyledInnerWrapper>
      <Heading medium>
        {price}
        <span>£</span>
      </Heading>
      <TextButton onClick={handleDeleteItem}>remove</TextButton>
    </StyledWrapper>
  );
};
CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartItem;
