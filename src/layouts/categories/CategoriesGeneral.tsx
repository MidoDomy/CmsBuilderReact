import React from 'react';

import CategoriesGeneralSectionGeneral from './general/CategoriesGeneralSectionGeneral';
import CategoriesGeneralSectionSEO from './general/CategoriesGeneralSectionSEO';
import CategoriesGeneralSectionCustomFields from './general/CategoriesGeneralSectionCustomFields';

const CategoriesGeneral: React.FC = () => {
  return (
    <>
      <CategoriesGeneralSectionGeneral />
      <CategoriesGeneralSectionSEO />
      <CategoriesGeneralSectionCustomFields />
    </>
  )
}

export default CategoriesGeneral;
