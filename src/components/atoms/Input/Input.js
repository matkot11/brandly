import styled, { css } from 'styled-components';

const Input = styled.input`
  /* width: 42.4rem; */
  /* height: 5.4rem; */
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.8rem;

  ${({ small }) =>
    small &&
    css`
      width: 14.3rem;
    `}

  ${({ quantity }) =>
    quantity &&
    css`
      /* width: 10.5rem; */
      /* height: 4.4rem; */
      border: 1px solid ${({ theme }) => theme.black};
    `}

  :focus {
    outline: none;
    border-bottom: solid 5px ${({ theme }) => theme.purple};
  }
`;

export default Input;
