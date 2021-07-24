import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getItems from 'composables/getItems';
import NavbarTemplate from 'templates/Navbar/Navbar-template';
import ItemDetails from 'components/organisms/ItemDetails/ItemDetails-component';
import Heading from 'components/atoms/Heading/Heading';

const Item = () => {
  const params = useParams();
  const { load, data, error } = getItems(Object.values(params));

  useEffect(() => {
    load();
  }, []);

  return (
    <NavbarTemplate>
      {data ? (
        <div>
          <ItemDetails
            id={data.id}
            image={data.image}
            price={data.price}
            name={data.title}
            about={data.description}
          />
        </div>
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
