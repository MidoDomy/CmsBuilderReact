import React from 'react';

import { BiMessageSquareDots } from 'react-icons/bi';

import Button from 'components/Button';

const NavigationBarMessages: React.FC = () => {
  return (
    <Button
      href='/messages'
      rounded
    >
      <BiMessageSquareDots size={18} />
    </Button>
  );
}

export default NavigationBarMessages;
