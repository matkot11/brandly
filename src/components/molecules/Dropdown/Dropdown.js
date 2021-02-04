import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdown = styled.div`
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  padding: 15px 0;
`;

const StyledHeading = styled(Heading)`
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.white};
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

const Dropdown = ({ name, children }) => {
  const dropdownRef = useRef(null);
  const [isClicked, setClick] = useState(false);
  useDetectOutsideClick(dropdownRef, setClick);

  return (
    <StyledWrapper ref={dropdownRef}>
      <StyledHeading as="button" onClick={() => setClick(!isClicked)}>
        {name}
      </StyledHeading>
      {isClicked && <StyledDropdown>{children}</StyledDropdown>}
    </StyledWrapper>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  children: {},
};

export default Dropdown;
