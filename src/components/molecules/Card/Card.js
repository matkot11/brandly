import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledImg = styled.img`
  border-radius: 5px 5px 0 0;
  object-fit: contain;
  width: 250px;
  height: 250px;
  padding: 10px;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 25px;
`;

const StyledHeadingWrapper = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  max-width: 220px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.light};
`;

const Card = ({ image, name, price, id }) => (
  <StyledWrapper>
    <StyledImg src={image} alt="item" />
    <StyledHeadingWrapper>
      <StyledHeading small>{name}</StyledHeading>
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
