import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import useLogin from 'composables/useLogin';
import NavbarTemplate from 'templates/NavbarTemplate';
import Form from 'components/organisms/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledHeading = styled(Heading)`
  max-width: 40rem;
  color: ${({ theme }) => theme.red};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.darkGrey};
`;

const Login = () => {
  const { error, login } = useLogin();
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <NavbarTemplate>
      <Form title="Login">
        {error && <StyledHeading small>{error}</StyledHeading>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => getEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => getPassword(e.target.value)}
          required
        />
        <Button type="submit" as="button" onClick={handleSubmit}>
          Login
        </Button>
        <Heading small>Do not have an account?</Heading>
        <StyledLink to={routes.register}>Click here to register.</StyledLink>
      </Form>
    </NavbarTemplate>
  );
};

export default Login;
