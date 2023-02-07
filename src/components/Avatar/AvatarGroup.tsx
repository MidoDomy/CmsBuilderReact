import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  space?: 'sm' | 'md' | 'lg';
}

const AvatarGroup: React.FC<Props> = ({ children, className, space, ...props }) => {

  const spaceClasses = (() => {switch(space) {
    case 'sm':
      return '-space-x-1.5'
    case 'lg':
      return '-space-x-3'
    default: 
      return '-space-x-2'
  }})()

  return (
    <div className={`flex ${spaceClasses}`}
      {...props}
    >
      {children}
    </div>
  );
}

AvatarGroup.defaultProps = {
  className: '',
  space: 'md'
}

export default AvatarGroup;
