import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import {
  StyledButton,
  StyledHeading,
  StyledHeadingWrapper,
  StyledImg,
  StyledWrapper,
} from './Card-styles';

const Card = ({ image, name, price, id }) => (
  <StyledWrapper>
    <StyledImg src={image} alt="item" />
    <StyledHeadingWrapper>
      <StyledHeading>{name}</StyledHeading>
      <Heading medium>
        {price}
        <span>£</span>
      </Heading>
    </StyledHeadingWrapper>

    <StyledButton id={id} to={`/item/${id}`}>
      VIEW
    </StyledButton>
  </StyledWrapper>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
