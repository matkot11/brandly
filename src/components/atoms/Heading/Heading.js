import styled, { css } from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;

  ${({ title }) =>
    title &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 3px;
      text-decoration: none;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
`;

export default Heading;
