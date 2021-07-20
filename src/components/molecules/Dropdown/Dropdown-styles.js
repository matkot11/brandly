import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledDropdown = styled.div`
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  padding: 1.5rem 0;
`;

export const StyledHeading = styled(Heading)`
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
