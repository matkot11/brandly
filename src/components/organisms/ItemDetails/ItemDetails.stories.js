import React from 'react';
import ItemDetails from './ItemDetails-component';

export default {
  title: 'ItemDetails',
  component: ItemDetails,
};

export const Primary = () => (
  <ItemDetails
    image="https://picsum.photos/300"
    price="200.00"
    name="Vinta"
    about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident."
  />
);
