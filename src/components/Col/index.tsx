import React, { useContext } from 'react';

import { RowContext } from 'contexts/Row';

type Props = {
  children?: React.ReactNode;
  className?: string;
  span?: number;
  fill?: Boolean;
}

const Col: React.FC<Props> = ({ children, className, span, fill, ...props }) => {
  const {cols, gap, gapX, gapY} = useContext(RowContext);

  const width = span && cols ? (100/cols * span + '%') : 'auto';
  const paddingX = (gapX ? gapX/2 : gap ? gap/2 : 0) + 'px';
  const paddingY = (gapY ? gapY : gap ? gap : 0) + 'px';

  return (
    <div className={`${fill ? 'flex-1' : ''} ${className}`} 
      style={{width: width, paddingLeft: paddingX, paddingRight: paddingX, paddingBottom: paddingY}}
      {...props}
    >
      {children}
    </div>
  );
}

Col.defaultProps = {
  className: ''
}

export default Col;
