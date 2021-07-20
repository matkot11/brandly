import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import getUser from 'composables/getUser';
import useCollection from 'composables/useCollection';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import {
  StyledHeading,
  StyledImg,
  StyledInnerWrapper,
  StyledParagraph,
  StyledWrapper,
} from './ItemDetails-styles';

const ItemDetails = ({ id, image, price, name, about }) => {
  const { user } = getUser();
  const { addDoc } = useCollection(user);

  const handleAddToCart = async () => {
    const item = {
      id,
      name,
      image,
      price,
    };
    await addDoc(item);
  };

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledImg src={image} alt="item" />
        <Heading medium>
          Price: {price}
          <span>£</span>
        </Heading>
        {user ? (
          <Button as="button" onClick={handleAddToCart}>
            Add to cart
          </Button>
        ) : (
          <StyledInnerWrapper>
            <Heading medium> Login to add item to cart.</Heading>
            <Button width="max-content" as={Link} to={routes.login}>
              Login
            </Button>
          </StyledInnerWrapper>
        )}
      </StyledInnerWrapper>
      <StyledInnerWrapper>
        <StyledHeading>{name}</StyledHeading>
        <StyledParagraph>{about}</StyledParagraph>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

ItemDetails.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ItemDetails;
