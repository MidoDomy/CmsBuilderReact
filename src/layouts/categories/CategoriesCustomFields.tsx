import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import CategoriesCustomFieldsSection from './custom-fields/CategoriesCustomFieldsSection';
import CategoriesCustomFieldsModalAddSection from './custom-fields/CategoriesCustomFieldsModalAddSection';

const CategoriesCustomFields: React.FC = () => {
  const sections = [
    {id: 0, title: 'Section 1', description: 'Section 1 description', fields: [
      {id: 10, name: 'field1', label: 'Field 1', placeholder: 'Enter field 1...', type: 'text', defaultValue: '', rules: ''}
    ]}
  ]

  const [showModalAddSection, setShowModalAddSection] = useState(false);

  return (
    <>
      {sections?.map(section => 
        <CategoriesCustomFieldsSection 
          key={section.id}
          title={section.title}
          description={section.description}
          fields={section.fields}
        />
      )}

      {/* Add new section */}
      <div className='flex justify-center py-5'>
        <div className='flex flex-col items-center text-slate-500 hover:text-slate-900 transition-colors'>
          <span className='mb-2 text-sm'>Add new section</span>

          <Button 
            rounded
            onClick={() => setShowModalAddSection(true)}
          >
            <Icon name='plus' size={16} />
          </Button>
        </div>
      </div>
    
      {/* Modal add section */}
      <CategoriesCustomFieldsModalAddSection
        isOpen={showModalAddSection}
        onClose={() => setShowModalAddSection(false)}
      />
    </>
  )
}

export default CategoriesCustomFields;
