import React, { useContext, useRef, useEffect } from 'react';

import { DropdownContext } from 'contexts/Dropdown';

type Props = {
  children?: React.ReactNode,
  className?: string
}

const DropdownMenu: React.FC<Props> = ({ children, className }) => {
  const {state, setState, position} = useContext(DropdownContext);

  const menuRef = useRef(null)
  const closeMenu = (e) => {
    if(menuRef.current && state && !menuRef.current.contains(e.target)){
      setState(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu)
  })

  const positionClasses = (() => {switch(position) {
    case 'top left':
      return 'bottom-full left-0 mb-3'
    case 'top center':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-3'
    case 'top right':
      return 'bottom-full right-0 mb-3'
    case 'bottom left':
      return 'top-full left-0 mt-3'
    case 'bottom center':
      return 'top-full left-1/2 -translate-x-1/2 mt-3'
    case 'bottom right':
      return 'top-full right-0 mt-3'
    default: 
      return ''
  }})()

  const arrowClasses = (() => {switch(position) {
    case 'top left':
      return '-bottom-1.5 left-3 -rotate-[135deg]'
    case 'top center':
      return '-bottom-1.5 left-1/2 -translate-x-1/2 -rotate-[135deg]'
    case 'top right':
      return '-bottom-1.5 right-3 -rotate-[135deg]'
    case 'bottom left':
      return '-top-1.5 left-3 rotate-45'
    case 'bottom center':
      return '-top-1.5 left-1/2 -translate-x-1/2 rotate-45'
    case 'bottom right':
      return '-top-1.5 right-3 rotate-45'
    default: 
      return ''
  }})()

  return (
    <div className={`absolute ${positionClasses} py-1 min-w-[180px] bg-white border border-gray-200 shadow rounded ${className} ${state ? '' : 'hidden'}`}
      ref={menuRef}
    >
      <div className={`absolute w-3 h-3 bg-white border-t border-l border-gray-200 ${arrowClasses}`}></div>
      {children}
    </div>
  );
}

DropdownMenu.defaultProps = {
  className: ''
}

export default DropdownMenu;
