import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const DataGridRow: React.FC<Props> = ({children, className}) => {
  return (
    <tr className={`shadow-sm rounded-lg ${className}`}>
      {children}
    </tr>
  );
}

DataGridRow.defaultProps = {
  className: ''
}

export default DataGridRow;
