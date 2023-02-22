import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

const NavigationBarMessages: React.FC = () => {
  return (
    <Button
      href='/messages'
      rounded
    >
      <Icon name='message' size={18} />
    </Button>
  );
}

export default NavigationBarMessages;
