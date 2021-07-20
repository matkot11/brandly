import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getItems from 'composables/getItems';
import Card from 'components/molecules/Card/Card-component';
import Heading from 'components/atoms/Heading/Heading';
import { StyledWrapper } from './Items-styles';

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
