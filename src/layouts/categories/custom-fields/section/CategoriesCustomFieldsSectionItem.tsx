import React from 'react';

import Form from 'components/Form';

interface CategoriesCustomFieldsSectionItem {
  label: string;
  placeholder: string;
  type: string;
  options?: {value: string, name: string}[];
}

type Props = {
  field: CategoriesCustomFieldsSectionItem;
}

const CategoriesCustomFieldsSectionItem: React.FC<Props> = ({field}) => {
  return (
    <>
      {field.type == 'number' ?
        <Form.Input 
          type='number'
          label={field.label}
          placeholder={field.placeholder}
        />
        :
        field.type == 'textarea' ?
          <Form.Textarea 
            label={field.label}
            placeholder={field.placeholder}
          />
        :
        field.type == 'select' ?
          (field.options &&
            <Form.Select 
              label={field.label}
              placeholder={field.placeholder}
              options={field.options}
            />
          )
        :
        <Form.Input 
          label={field.label}
          placeholder={field.placeholder}
        />
      }
    </>
  )
}

export default CategoriesCustomFieldsSectionItem;
