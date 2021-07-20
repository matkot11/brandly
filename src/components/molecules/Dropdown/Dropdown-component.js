import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import {
  StyledDropdown,
  StyledHeading,
  StyledWrapper,
} from './Dropdown-styles';

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
