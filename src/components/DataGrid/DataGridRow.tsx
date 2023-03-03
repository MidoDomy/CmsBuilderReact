import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const DataGridRow: React.FC<Props> = ({children, className}) => {
  return (
    <tr className={`bg-white hover:bg-gray-50 shadow-sm hover:shadow rounded-lg transition-all ${className}`}>
      {children}
    </tr>
  );
}

DataGridRow.defaultProps = {
  className: ''
}

export default DataGridRow;
