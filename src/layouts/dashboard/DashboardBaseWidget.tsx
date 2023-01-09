import React from 'react';
import { useDrag } from 'react-dnd';

type Props = {
  children?: React.ReactNode,
  widget?: Object
}

const DashboardBaseWidget: React.FC<Props> = ({ children, widget }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',
    item: widget,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div>
      <div className={`select-none cursor-grab active:cursor-grabbing rounded-lg ${isDragging ? 'opacity-0' : ''}`}
        ref={drag}
      >
        {children}
      </div>

      <div className='pt-2 text-center font-medium text-sm text-slate-700'>{widget.name}</div>
    </div>
  )
}

export default DashboardBaseWidget;
