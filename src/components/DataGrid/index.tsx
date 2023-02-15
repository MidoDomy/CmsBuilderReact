import React from 'react';

import Icon from 'components/Icon';

import DataGridRow from './DataGridRow';
import DataGridCol from './DataGridCol';

interface DataGridColumn {
  key: string; 
  name: string;
}

type Props = {
  children?: React.ReactNode;
  className?: string;
  columns: DataGridColumn[];
}

const DataGrid: React.FC<Props> = ({children, className, columns}) => {
  return (
    <table className={`w-full border-separate border-spacing-y-1.5 text-left ${className}`}>
      <thead>
        <tr>
          {columns?.map(column =>
            <th className='px-4 pb-2 font-medium text-sm uppercase'
              key={column.key}
            >
              <span className='inline-flex items-center gap-1'>
                {column.name}
                {column.name &&
                  <Icon name='arrow-down' size={12} />
                }
              </span>
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {children}
      </tbody>
    </table>
  );
}

DataGrid.defaultProps = {
  className: ''
}

export default Object.assign(DataGrid, {
  Row: DataGridRow,
  Col: DataGridCol
});
