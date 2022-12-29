import React from 'react';

import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Check from './Check';
import Group from './Group';

type Props = {
  children: React.ReactNode,
  className?: string
}

const Form: React.FC<Props> = ({children, className, ...props}) => {
  return (
    <form className={`form ${className}`} {...props}>
      {children}
    </form>
  )
}

Form.defaultProps = {
  className: ''
}

export default Object.assign(Form, {
  Input: Input,
  Select: Select,
  Radio: Radio,
  Check: Check,
  Group: Group
});
