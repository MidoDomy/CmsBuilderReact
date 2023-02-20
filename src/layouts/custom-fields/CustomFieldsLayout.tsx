import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import CustomFieldsSection from './CustomFieldsSection';
import CustomFieldsModalAddSection from './CustomFieldsModalAddSection';

const CustomFieldsLayout: React.FC = () => {
  const sections = [
    {id: 0, title: 'Section 1', description: 'Section 1 description', fields: [
      {id: 10, name: 'field1', label: 'Field 1', placeholder: 'Enter field 1...', type: 'text', defaultValue: '', rules: ''}
    ]},
    {id: 2, title: 'Section 2', description: 'Section 2 description', fields: []}
  ]

  const [showModalAddSection, setShowModalAddSection] = useState(false);

  return (
    <>
      {sections?.map(section => 
        <CustomFieldsSection 
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
      <CustomFieldsModalAddSection
        isOpen={showModalAddSection}
        onClose={() => setShowModalAddSection(false)}
      />
    </>
  )
}

export default CustomFieldsLayout;
