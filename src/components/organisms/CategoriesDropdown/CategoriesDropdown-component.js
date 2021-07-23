import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'components/molecules/Dropdown/Dropdown-component';
import getItems from 'composables/getItems';
import Heading from 'components/atoms/Heading/Heading';
import { StyledHeading } from './CategoriesDropdown-styles';

const CategoriesDropdown = () => {
  const { load, error, data } = getItems('categories');

  useEffect(() => {
    load();
  }, []);

  return (
    <Dropdown name="Categories">
      {data ? (
        data.map((item) => (
          <StyledHeading as={Link} key={item} to={`/category/${item}`}>
            {item}
          </StyledHeading>
        ))
      ) : !error ? (
        <Heading>Loading...</Heading>
      ) : (
        <Heading>{error}</Heading>
      )}
      <StyledHeading as={Link} to="/">
        all products
      </StyledHeading>
    </Dropdown>
  );
};

export default CategoriesDropdown;
