import React, { useState } from 'react';
import { useFocus } from 'react-aria'

import Form from 'components/Form';
import Button from 'components/Button';
import Icon from 'components/Icon';

const NavigationBarSearch: React.FC = () => {

  const [focus, setFocus] = useState(false);
  let { focusProps } = useFocus({
    onFocusChange: (isFocused) =>
      setFocus(isFocused)
  });

  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e: any) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleClear = () => {
    setSearchValue('');
  }

  return (
    <div className='relative'>
      {/* Field */}
      <Form.InputGroup>
        <div className='flex-1 relative'>
          <Icon className='absolute top-1/2 left-3 transform -translate-y-1/2' name='search' size={16} />

          <input className='w-full h-full py-1 pl-9 pr-5 bg-gray-50 border border-r-0 focus:border-r border-gray-200 focus:border-sky-500 rounded-l-3xl focus:outline-none placeholder:text-slate-500'
            type='text' 
            placeholder='Search'
            {...focusProps}
            value={searchValue}
            onChange={(e) => handleChange(e)}
          />

          {searchValue.length > 0 &&
            <Button className='absolute top-1/2 right-0 -translate-y-1/2'
              variant='ghost'
              size='sm'
              rounded
              onClick={handleClear}
            >
              <Icon name='x' size={16} />
            </Button>
          }
        </div>

        <Form.Select selectClass='rounded-l-none rounded-r-3xl'
          placeholder='Advanced'
          options={[
            {value: 'all', name: 'All'},
            {value: 'categories', name: 'Categories'},
            {value: 'collections', name: 'Collections'}
          ]}
        />
      </Form.InputGroup>

      {/* Results */}
      {focus && searchValue.length > 0 &&
        <div className='absolute top-full left-0 right-0 z-50 pl-4 pr-[124px]'>
          {/* Group */}
          <div className='mb-0.5 py-3 bg-white border border-gray-200 shadow-sm rounded first:rounded-t-none first:border-t-0'>
            <div className='mb-1 px-2 text-xs text-slate-400'>Categories</div>

            {/* Items */}
            <div className='flex gap-3 px-2 py-1.5 hover:bg-gray-100 text-sm transition-colors cursor-pointer'>
              <div>{`>`}</div>
              <div className='flex-1'>Category One</div>
            </div>
            <div className='flex gap-3 px-2 py-1.5 hover:bg-gray-100 text-sm transition-colors cursor-pointer'>
              <div>{`>`}</div>
              <div className='flex-1'>Category Second</div>
            </div>
          </div>

          {/* Group */}
          <div className='mb-0.5 py-3 bg-white border border-gray-200 shadow-sm rounded first:rounded-t-none first:border-t-0'>
            <div className='mb-1 px-2 text-xs text-slate-400'>Collections</div>

            {/* Items */}
            <div className='flex gap-3 px-2 py-1.5 hover:bg-gray-100 text-sm transition-colors cursor-pointer'>
              <div>{`>`}</div>
              <div className='flex-1'>Blogs</div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default NavigationBarSearch;
