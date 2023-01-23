import React from 'react';

import Container from 'components/Container';
import Flex from 'components/Structuring/Flex';
import Button from 'components/Button';
import Icon from 'components/Icon';

const EmailsContent: React.FC = () => {
  return (
    <div className='flex-1'>
      {/* Header */}
      <div className='mb-20 mt-10'>
        <Container>
          <Flex className='pb-3 border-b border-gray-200 dark:border-gray-700' 
            justify='between'
          >
            <h2 className='text-3xl text-slate-900 dark:text-slate-100 font-bold'>Emails</h2>

            <Flex gap={10}>
              <Button>
                <Icon name='plus' size={18} />
                <span>Add</span>
              </Button>

              <Button variant='primary' isDisabled>
                <Icon name='checkmark' size={18} />
                <span>Save</span>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </div>

      <Container>
        Emails
      </Container>
    </div>
  )
}

export default EmailsContent;
