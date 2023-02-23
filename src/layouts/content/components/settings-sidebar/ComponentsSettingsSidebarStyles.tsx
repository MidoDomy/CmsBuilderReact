import React from 'react';

import StylesStates from 'layouts/general/styles/StylesStates';
import StylesAlign from 'layouts/general/styles/StylesAlign';
import StylesSize from 'layouts/general/styles/StylesSize';
import StylesSpacing from 'layouts/general/styles/StylesSpacing';
import StylesPosition from 'layouts/general/styles/StylesPosition';
import StylesTypography from 'layouts/general/styles/StylesTypography';
import StylesBackgrounds from 'layouts/general/styles/StylesBackgrounds';
import StylesBorders from 'layouts/general/styles/StylesBorders';
import StyleShadows from 'layouts/general/styles/StylesShadows';
import StylesEffects from 'layouts/general/styles/StylesEffects';
import StylesTransform from 'layouts/general/styles/StylesTransform';
import StylesTransition from 'layouts/general/styles/StylesTransition';

const ComponentsSettingsSidebarStyles: React.FC = () => {
  return (
    <div className='flex flex-col gap-1.5'>
      <StylesStates />
      <StylesAlign />
      <StylesSpacing />
      <StylesSize />
      <StylesPosition />
      <StylesTypography />
      <StylesBackgrounds />
      <StylesBorders />
      <StyleShadows />
      <StylesEffects />
      <StylesTransform />
      <StylesTransition />
    </div>
  )
}

export default ComponentsSettingsSidebarStyles;
