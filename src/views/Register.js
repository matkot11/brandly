import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import useRegister from 'composables/useRegister';
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

const Register = () => {
  const { error, register } = useRegister();
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [repeatPassword, getRepeatPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(email, password, repeatPassword);
  };

  return (
    <NavbarTemplate>
      <Form title="Register">
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
        <Input
          type="password"
          placeholder=" Repeat password"
          value={repeatPassword}
          onChange={(e) => getRepeatPassword(e.target.value)}
          required
        />
        <Button as="button" type="submit" onClick={handleSubmit}>
          Register
        </Button>
        <Heading small>Have already an account?</Heading>
        <StyledLink to={routes.login}>Click here to login.</StyledLink>
      </Form>
    </NavbarTemplate>
  );
};
export default Register;
