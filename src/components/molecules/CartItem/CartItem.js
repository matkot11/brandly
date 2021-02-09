import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { firestore } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { getMessage } from 'redux/message/messageSlice';
import { getError } from 'redux/error/errorSlice';
import getUser from 'composables/getUser';
import Heading from 'components/atoms/Heading/Heading';
import TextButton from 'components/atoms/TextButton/TextButton';

const StyledWrapper = styled.div`
align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  @media only screen and (max-width: ${({theme}) => theme.size.m}) {
    flex-direction: column;
    & > * {
      margin: 10px 0;
    }
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${({theme}) => theme.size.l}) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  max-width: 250px;
  max-height: 250px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const StyledHeading = styled(Heading)`
  max-width: 300px;
`;

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
        <StyledHeading medium>{name}</StyledHeading>
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
