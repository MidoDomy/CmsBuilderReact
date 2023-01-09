import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import Container from 'components/Structuring/Container';
import DashboardDynamicWidgetImport from 'layouts/dashboard/DashboardDynamicWidgetImport';

const DashboardBoard: React.FC = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'div',
    drop: (widget) => addWidgetToBoard(widget),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWidgetToBoard = (widget) => {
    let item = { 
      colStart: 1,
      colEnd: 6,
      rowStart: 1,
      rowEnd: 3,
      widget: widget
    }

    setBoard(prevBoard => [...prevBoard, item])
  };

  return (
    <>
      <Container className='py-10'>
        <div className='relative grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(15,_50px)] gap-3'
          ref={drop}
        >
          {/* Bg dashed cubes */}
          <div className='absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(15,_50px)] gap-3'>
            { [...Array(20*15)].map((e, i) => <div key={i} className={`w-full h-full border-2 border-dashed border-gray-200 rounded-xl transition-opacity ${isOver ? 'opacity-100' : 'opacity-0'}`}></div>) } 
          </div>

          {/* Dashboard content */}
          {/* style={{gridColumnStart: item.colStart, gridColumnEnd: item.colEnd, gridRowStart: item.rowStart, gridRowEnd: item.rowEnd}} */}
          { board?.map((item, index) => 
            <div className='relative z-10'
              style={{gridColumn: 'span 4', gridRow: 'span 2'}}
              key={index} 
            >
              <DashboardDynamicWidgetImport element={item.widget.element} />
            </div>
          )} 
        </div>
      </Container>
    </>
  )
}

export default DashboardBoard;
