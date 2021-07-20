import React, { useState } from 'react';
import { routes } from 'routes';
import useRegister from 'composables/useRegister';
import NavbarTemplate from 'templates/Navbar/Navbar-template';
import Form from 'components/organisms/Form/Form-component';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { StyledHeading, StyledLink } from './Register-styles';

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
