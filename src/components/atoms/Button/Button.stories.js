import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>VIEW</Button>;

export const Checkout = () => (
  <Button width="max-content">Go to checkout</Button>
);

export const WhiteButton = () => <Button whiteButton>Shop now</Button>;
