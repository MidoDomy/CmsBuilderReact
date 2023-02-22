import React from 'react';

import StyleGrid from 'layouts/general/styles/StylesGrid';
import StylesAlign from 'layouts/general/styles/StylesAlign';
import StylesSize from 'layouts/general/styles/StylesSize';
import StylesSpacing from 'layouts/general/styles/StylesSpacing';
import StylesTypography from 'layouts/general/styles/StylesTypography';
import StylesBackgrounds from 'layouts/general/styles/StylesBackgrounds';
import StylesBorders from 'layouts/general/styles/StylesBorders';

const LayoutsEditSettingsSidebarStyles: React.FC = () => {
  return (
    <div className='flex flex-col gap-1.5'>
      <StyleGrid />
      <StylesAlign />
      <StylesSize />
      <StylesSpacing />
      <StylesTypography />
      <StylesBackgrounds />
      <StylesBorders />
    </div>
  )
}

export default LayoutsEditSettingsSidebarStyles;
