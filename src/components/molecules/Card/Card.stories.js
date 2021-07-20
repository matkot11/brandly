import React from 'react';
import Card from './Card-component';

export default {
  title: 'Card',
  component: Card,
};

export const Primary = () => (
  <Card image="https://picsum.photos/250" name="Rayban" price="40.99" />
);
