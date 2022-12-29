import React from 'react';

import StyleAlign from 'layouts/content/style/Align';
import StyleSize from 'layouts/content/style/Size';
import StyleSpacing from 'layouts/content/style/Spacing';
import StyleTypography from 'layouts/content/style/Typography';
import StyleBackgrounds from 'layouts/content/style/Backgrounds';
import StyleBorders from 'layouts/content/style/Borders';

type Props = {
  className?: string
}

const StyleSidebar: React.FC<Props> = ({ className }) => {
  return (
    <>
      <StyleAlign />
      <StyleSize />
      <StyleSpacing />
      <StyleTypography />
      <StyleBackgrounds />
      <StyleBorders />
    </>
  );
}

export default StyleSidebar;
