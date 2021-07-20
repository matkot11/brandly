import React, { useState } from 'react';
import useAddress from 'composables/useAddress';
import SidebarTemplate from 'templates/Sidebar/Sidebar-template';
import Form from 'components/organisms/Form/Form-component';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const Address = () => {
  const { addAddress } = useAddress();
  const [firstName, getFirstName] = useState('');
  const [lastName, getLastName] = useState('');
  const [streetName, getStreetName] = useState('');
  const [streetNumber, getStreetNumber] = useState('');
  const [postcode, getPostcode] = useState('');
  const [city, getCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const address = {
      firstName,
      lastName,
      streetName,
      streetNumber,
      postcode,
      city,
    };

    await addAddress(address);
  };

  return (
    <SidebarTemplate>
      <Form title="Address">
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(e) => getFirstName(e.target.value)}
          required
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => getLastName(e.target.value)}
          required
        />
        <Input
          placeholder="Street name"
          value={streetName}
          onChange={(e) => getStreetName(e.target.value)}
          required
        />
        <Input
          placeholder="Street number"
          value={streetNumber}
          onChange={(e) => getStreetNumber(e.target.value)}
          required
        />
        <Input
          placeholder="Postcode"
          value={postcode}
          onChange={(e) => getPostcode(e.target.value)}
          required
        />
        <Input
          placeholder="Town / city"
          value={city}
          onChange={(e) => getCity(e.target.value)}
          required
        />
        <Heading medium>Free delivery!!!</Heading>
        <Button as="button" type="submit" onClick={handleSubmit}>
          Go to payment
        </Button>
      </Form>
    </SidebarTemplate>
  );
};

export default Address;
