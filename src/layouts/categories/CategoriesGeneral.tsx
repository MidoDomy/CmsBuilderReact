import React from 'react';

import CategoriesGeneralSectionGeneral from './general/CategoriesGeneralSectionGeneral';
import CategoriesGeneralSectionCustomFields from './general/CategoriesGeneralSectionCustomFields';

const CategoriesGeneral: React.FC = () => {
  return (
    <>
      <CategoriesGeneralSectionGeneral />
      <CategoriesGeneralSectionCustomFields />
    </>
  )
}

export default CategoriesGeneral;
