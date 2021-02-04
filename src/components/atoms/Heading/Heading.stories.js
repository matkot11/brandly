import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const Title = () => <Heading title>BRANDLY</Heading>;
export const Categories = () => <Heading>Categories</Heading>;
export const Cart = () => <Heading>Cart</Heading>;
export const Logout = () => <Heading>Logout</Heading>;
export const Register = () => <Heading>Register</Heading>;
export const Login = () => <Heading>Login</Heading>;
export const Small = () => <Heading small>Placeholder</Heading>;
