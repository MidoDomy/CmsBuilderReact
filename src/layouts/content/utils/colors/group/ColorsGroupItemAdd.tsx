import React, { useState } from 'react';

import { FiPlusCircle } from 'react-icons/fi';

import ColorsGroupModalAddItem from './ColorsGroupModalAddItem';

const ColorsGroupItemAdd: React.FC = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <>
      <div className='flex items-center justify-center w-16 h-10 border-2 border-gray-200 hover:border-gray-300 border-dashed rounded text-slate-300 hover:text-slate-400 cursor-pointer transition-colors'
        onClick={() => setShowModalAdd(true)}
      >
        <FiPlusCircle size={18} />
      </div>

      {/* Modal add */}
      <ColorsGroupModalAddItem
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      />
    </>
  )
}

export default ColorsGroupItemAdd;
