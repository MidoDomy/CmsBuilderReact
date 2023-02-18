import React from 'react';

import StyleGrid from 'layouts/content/styles/StylesGrid';
import StylesAlign from 'layouts/content/styles/StylesAlign';
import StylesSize from 'layouts/content/styles/StylesSize';
import StylesSpacing from 'layouts/content/styles/StylesSpacing';
import StylesTypography from 'layouts/content/styles/StylesTypography';
import StylesBackgrounds from 'layouts/content/styles/StylesBackgrounds';
import StylesBorders from 'layouts/content/styles/StylesBorders';

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
