import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const DataGridCol: React.FC<Props> = ({children, className}) => {
  return (
    <td className={`py-1.5 px-4 first:rounded-l-lg last:rounded-r-lg border border-r-0 last:border-r border-l-0 first:border-l border-gray-200 ${className}`}>
      {children}
    </td>
  );
}

DataGridCol.defaultProps = {
  className: ''
}

export default DataGridCol;
