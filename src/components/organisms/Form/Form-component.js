import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledHeading, StyledWrapper } from './Form-styles';

const Form = ({ title, children }) => (
  <StyledWrapper>
    <StyledHeading>{title}</StyledHeading>
    <StyledForm>{children}</StyledForm>
  </StyledWrapper>
);

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
