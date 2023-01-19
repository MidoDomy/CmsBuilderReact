import React from 'react';

import FormSelect from 'components/Form/Select';
import Icon from 'components/Icon';

const NavigationBarSearch: React.FC = () => {
  return (
    <div className='relative flex w-1/2'>
      <Icon className='absolute top-1/2 left-3 transform -translate-y-1/2' name='search' size={16} />

      <input className='w-full py-1 pl-9 pr-5 bg-gray-50 border border-r-0 border-gray-200 rounded-l-3xl text-sm focus:outline-none placeholder:text-slate-500'
        type='text' 
        placeholder='Search'
      />

      <FormSelect className='rounded-l-none rounded-r-3xl'
        placeholder='Advanced'
        options={[
          {
            value: 'categories',
            name: 'Categories'
          },
          {
            value: 'categories',
            name: 'Cate'
          }
        ]}
      />
    </div>
  );
}

export default NavigationBarSearch;
