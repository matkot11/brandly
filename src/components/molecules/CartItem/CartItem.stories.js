import React from 'react';
import CartItem from './CartItem-component';

export default {
  title: 'CartItem',
  component: CartItem,
};

export const Primary = () => (
  <CartItem image="https://picsum.photos/200" name="Vita" price="200.00" />
);
