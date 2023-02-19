import React, { useState } from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import DataGrid from 'components/DataGrid';
import Section from 'layouts/general/Section';
import CategoriesCustomFieldsSectionTableItem from './section/CategoriesCustomFieldsSectionTableItem';
import CategoriesCustomFieldSectionDropdown from './section/CategoriesCustomFieldSectionDropdown';
import CategoriesCustomFieldsSectionItem from './section/CategoriesCustomFieldsSectionItem';

interface CustomFieldsSectionField {
  id: number; 
  name: string; 
  label: string; 
  placeholder: string;
  type: string;
  defaultValue: any;
  rules: string;
}

type Props = {
  title: string;
  description: string;
  fields: CustomFieldsSectionField[];
}

const CategoriesCustomFieldsSection: React.FC<Props> = ({title, description, fields}) => {
  const columns = [
    { key: 'label', name: 'Label' },
    { key: 'name', name: 'Name' },
    { key: 'type', name: 'Type' },
    { key: 'defaultValue', name: 'D. value' }
  ];

  const [isEdit, setIsEdit] = useState(false);

  return (
    <Section 
      title={title}
      description={description}
    >
      {/* actions */}
      <div className='relative'>
        <div className='absolute top-0 right-full pr-10'>
          <Row gapX={8} justify='end' noWrap>
            {isEdit ?
              <>
                <Col>
                  <Button 
                    variant='primary'
                    size='sm' 
                    rounded
                    onClick={() => setIsEdit(false)}
                  >
                    <Icon name='checkmark' size={16} />
                  </Button>
                </Col>

                <Col>
                  <Button 
                    variant='danger'
                    size='sm' 
                    rounded
                    onClick={() => setIsEdit(false)}
                  >
                    <Icon name='x' size={16} />
                  </Button>
                </Col>
              </>
              :
              <Col>
                <CategoriesCustomFieldSectionDropdown
                  isEdit={isEdit}
                  setIsEdit={() => setIsEdit(!isEdit)}
                />
              </Col>
            }
          </Row>
        </div>
      </div>

      {fields.length > 0 ?
        isEdit ?
          <DataGrid columns={columns}>
            {fields?.map(field =>
              <CategoriesCustomFieldsSectionTableItem
                key={field.id}
                label={field.label}
                name={field.name}
                type={field.type}
                defaultValue={field.defaultValue}
              />
            )}
          </DataGrid>
          :
          <>
            {fields?.map(field =>
              <CategoriesCustomFieldsSectionItem
                key={field.id}
                field={field}
              />
            )}
          </>
        :
        <div className='flex items-center justify-center p-4 bg-white border border-gray-200 rounded text-center'>
          <span className='font-medium text-sm text-slate-500'>No fields</span>
        </div>
      }
    </Section>
  )
}

export default CategoriesCustomFieldsSection;
