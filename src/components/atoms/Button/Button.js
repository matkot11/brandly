import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/* const Button = styled.a` */
const Button = styled(Link)`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  border: none;
  border-radius: 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  padding: 1rem 1.5rem;

  :focus {
    outline: none;
  }

  :active {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }

  ${({ whiteButton }) =>
    whiteButton &&
    css`
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.black};
      border: 2px solid ${({ theme }) => theme.black};
      /* width: 34.3rem; */
      /* height: 6.4rem; */
      padding: 1rem 2rem 1rem 2rem;
      font-size: ${({ theme }) => theme.fontSize.xl};

      :active {
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
        border: none;
      }
    `}
`;

export default Button;
