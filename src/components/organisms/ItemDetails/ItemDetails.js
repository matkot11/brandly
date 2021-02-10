import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import getUser from 'composables/getUser';
import useCollection from 'composables/useCollection';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > * {
    margin: 0 2rem;
    @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
      margin: 0;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    flex-direction: column;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 2rem 0;
  }
`;

const StyledImg = styled.img`
  max-width: 30rem;
  border-radius: 5px;
`;

const StyledHeading = styled(Heading)`
  align-self: center;
  max-width: 50rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
  max-width: 52.1rem;
`;

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
