import React from 'react';

import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupText from './InputGroupText';
import Textarea from './Textarea';
import Select from './Select';
import Switch from './Switch';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Group from './Group';
import FileUpload from './FileUpload';

type Props = {
  children: React.ReactNode;
  className?: string;
  action?: string;
  method?: 'get' | 'post';
}

const Form: React.FC<Props> = ({children, className, action, method, ...props}) => {
  return (
    <form className={className} 
      action={action}
      method={method}
      {...props}
    >
      {children}
    </form>
  )
}

Form.defaultProps = {
  className: ''
}

export default Object.assign(Form, {
  Input: Input,
  InputGroup: InputGroup,
  InputGroupText: InputGroupText,
  Textarea: Textarea,
  Select: Select,
  Switch: Switch,
  Radio: Radio,
  Checkbox: Checkbox,
  Group: Group,
  FileUpload: FileUpload
});
