import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 20px;
  background-color: ${({ theme }) => theme.lightGrey};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px 0;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0;
  align-self: left;
`;

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
