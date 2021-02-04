import React from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Form from './Form';

export default {
  title: 'Form',
  component: Form,
};

export const Login = () => (
  <Form title="Login">
    <Input placeholder="Email" />
    <Input placeholder="Password" />
    <Button>Login</Button>
    <Heading small>Do not have an account? Click here to register.</Heading>
  </Form>
);
export const Register = () => (
  <Form title="Register">
    <Input placeholder="Display name" />
    <Input placeholder="Email" />
    <Input placeholder="Password" />
    <Input placeholder=" Repeat password" />
    <Button>Register</Button>
    <Heading small>Have arleady an account? Click here to login.</Heading>
  </Form>
);
