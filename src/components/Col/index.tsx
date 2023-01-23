import React, { useContext } from 'react';

import { RowContext } from 'contexts/Row';

type Props = {
  children?: React.ReactNode;
  className?: string;
  span?: number;
}

const Col: React.FC<Props> = ({ children, className, span, ...props }) => {
  const {cols, gap} = useContext(RowContext);

  const width = span && cols ? (100/cols * span + '%') : 'auto';
  const padding = gap ? gap/2 + 'px' : '0px';

  return (
    <div className={`first:!pl-0 last:!pr-0 ${className}`} 
      style={{width: width, paddingLeft: padding, paddingRight: padding}}
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
