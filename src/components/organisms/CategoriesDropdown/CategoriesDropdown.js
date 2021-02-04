import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'components/molecules/Dropdown/Dropdown';
import Heading from 'components/atoms/Heading/Heading';
import getItems from 'composables/getItems';

const StyledHeading = styled(Heading)`
  background-color: ${({ theme }) => theme.white};
  padding: 12px 16px;
  border: none;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }

  :focus {
    outline: none;
  }
`;

const CategoriesDropdown = () => {
  const { load, error, data } = getItems('categories');

  useEffect(() => {
    load();
  }, []);

  return (
    <Dropdown name="Categories">
      {data ? (
        data.map((item) => (
          <StyledHeading
            medium="true"
            as={Link}
            key={item}
            to={`/category/${item}`}
          >
            {item}
          </StyledHeading>
        ))
      ) : !error ? (
        <Heading small>Loading...</Heading>
      ) : (
        <Heading small>{error}</Heading>
      )}
      <StyledHeading medium="true" as={Link} to="/">
        all products
      </StyledHeading>
    </Dropdown>
  );
};

export default CategoriesDropdown;
