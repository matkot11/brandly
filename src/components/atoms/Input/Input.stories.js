import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Primary = () => <Input placeholder="Display name" />;
export const Small = () => <Input small placeholder="CVC" />;
export const Quantity = () => <Input quantity value="1" />;
