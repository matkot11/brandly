import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  padding: 10px 15px;

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
      width: 343px;
      height: 64px;
      padding: 10px 20px 10px 20px;
      font-size: ${({ theme }) => theme.fontSize.xl};

      :active {
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
        border: none;
      }
    `}
`;

export default Button;
