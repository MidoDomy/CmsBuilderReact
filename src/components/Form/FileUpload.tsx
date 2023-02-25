import React from 'react';

import { FiFile } from 'react-icons/fi';

import Label from './Label';

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  value?: string;
  icon?: React.ReactNode;
  label?: string;
  description?: string | React.ReactNode;
  accept?: string;
  multiple?: boolean;
}

const FileUpload: React.FC<Props> = ({children, className, id, value, icon, label, description, accept, multiple, ...props}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      
      <div className={`relative flex flex-col items-center py-5 px-6 bg-white border-2 border-dashed border-gray-200 rounded select-none cursor-pointer ${className}`}
        {...props}
      >
        <input className='absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer' 
          type="file" 
          id={id} 
          accept={accept} 
          multiple={multiple} 
        />

        {icon &&
          <div className='mb-1 p-2 bg-sky-100 rounded-full'>
            {icon}
          </div>
        }

        <div>{description}</div>
      </div>
    </>
  )
}

FileUpload.defaultProps = {
  className: '',
  icon: <FiFile size={24} />,
  description: <div className='text-sm text-slate-500'><div><span className='font-medium text-sky-500'>Click to upload</span> or drag and drop</div> SVG, PNG or JPG (max. 800x400px)</div>,
  accept: 'image/*'
}

export default FileUpload;
