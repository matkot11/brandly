import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Dropdown from './Dropdown-component';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const StyledHeading = styled(Heading)`
  background-color: ${({ theme }) => theme.white};
  padding: 12px 16px;
  border: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }

  :focus {
    outline: none;
  }
`;

export const Primary = () => (
  <Dropdown name="Categories">
    <StyledHeading medium as="button">
      Men clothing
    </StyledHeading>
    <StyledHeading medium as="button">
      Women clothing
    </StyledHeading>
    <StyledHeading medium as="button">
      Jewelery
    </StyledHeading>
    <StyledHeading medium as="button">
      Electronics
    </StyledHeading>
  </Dropdown>
);
