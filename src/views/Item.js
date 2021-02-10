import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import getItems from 'composables/getItems';
import NavbarTemplate from 'templates/NavbarTemplate';
import ItemDetails from 'components/organisms/ItemDetails/ItemDetails';
import Heading from 'components/atoms/Heading/Heading';

const StyledInnerWrap = styled.div`
  min-width: 70vw;
  padding-top: 5rem;
`;

const Item = () => {
  const params = useParams();
  const { load, data, error } = getItems(Object.values(params));

  useEffect(() => {
    load();
  }, []);

  return (
    <NavbarTemplate>
      {data ? (
        <StyledInnerWrap>
          <ItemDetails
            id={data.id}
            image={data.image}
            price={data.price}
            name={data.title}
            about={data.description}
          />
        </StyledInnerWrap>
      ) : !error ? (
        <Heading>Loading...</Heading>
      ) : (
        <Heading medium>{error}</Heading>
      )}
      <h1>{error}</h1>
    </NavbarTemplate>
  );
};
export default Item;
