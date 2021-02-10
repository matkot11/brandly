import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import getItems from 'composables/getItems';
import Card from 'components/molecules/Card/Card';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 

  & > * {
    margin: 3rem;

    @media only screen and (max-width: ${({theme}) => theme.size.m}) {
    margin: 2rem 0;
  }
  }
`;

const Items = () => {
  const location = useLocation();
  const { load, data } = getItems(location.pathname);
  useEffect(async () => {
    await load();
  }, [location]);

  return (
    <StyledWrapper key={location.key}>
        {data ? (
          data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
            />
          ))
        ) : (
          <Heading>Loading...</Heading>
        )}
    </StyledWrapper>
  );
};
export default Items;
