import React, { useState } from 'react';
import useAddress from 'composables/useAddress';
import SidebarTemplate from 'templates/SidebarTemplate';
import Form from 'components/organisms/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

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
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => getLastName(e.target.value)}
        />
        <Input
          placeholder="Street name"
          value={streetName}
          onChange={(e) => getStreetName(e.target.value)}
        />
        <Input
          placeholder="Street number"
          value={streetNumber}
          onChange={(e) => getStreetNumber(e.target.value)}
        />
        <Input
          placeholder="Postcode"
          value={postcode}
          onChange={(e) => getPostcode(e.target.value)}
        />
        <Input
          placeholder="Town / city"
          value={city}
          onChange={(e) => getCity(e.target.value)}
        />

        <Button as="button" type="submit" onClick={handleSubmit}>
          Go to payment
        </Button>
      </Form>
    </SidebarTemplate>
  );
};

export default Address;
