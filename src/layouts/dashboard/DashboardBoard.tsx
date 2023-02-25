import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import Container from 'components/Container';
import DashboardDynamicWidgetImport from 'layouts/dashboard/DashboardDynamicWidgetImport';

const DashboardBoard: React.FC = () => {
  const [board, setBoard] = useState([
    { colStart: 1, colEnd: -1, rowStart: 1, rowEnd: 3, 
      widget: { id: 1, element: 'DashboardWidgetText', name: 'Text' }
    },
    { colStart: 1, colEnd: 14, rowStart: 3, rowEnd: 9, 
      widget: { id: 1, element: 'DashboardWidgetStatisticalOverview', name: 'Statistical overview' }
    },
    { colStart: 14, colEnd: 21, rowStart: 3, rowEnd: 9,
      widget: { id: 1,  element: 'DashboardWidgetActivityTimeline', name: 'Activity Timeline' }
    },
    { colStart: 1, colEnd: 14, rowStart: 9, rowEnd: 16,
      widget: { id: 1, element: 'DashboardWidgetEmployeeStatus', name: 'Employee Status' }
    },
    { colStart: 14, colEnd: 21, rowStart: 9, rowEnd: 16,
      widget: { id: 1, element: 'DashboardWidgetWorkingFormat', name: 'Working format' }
    }
  ]);

  // TODO: Add functionality of drag and drop
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'div',
    drop: (widget) => addWidgetToBoard(widget),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWidgetToBoard = (widget: any) => {
    let item = { 
      colStart: 1,
      colEnd: 6,
      rowStart: 1,
      rowEnd: 3,
      widget: widget
    }

    setBoard(prevBoard => [...prevBoard, item])
  };
  // ----------------------------------------

  return (
    <div>
      <Container className='py-10'>
        <div className='relative grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(15,_50px)] gap-4'
          ref={drop}
        >
          {/* Bg dashed cubes */}
          <div className='absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(15,_50px)] gap-4'>
            { [...Array(20*15)].map((e, i) => <div key={i} className={`w-full h-full border-2 border-dashed border-gray-200 rounded-xl transition-opacity ${isOver ? 'opacity-100' : 'opacity-0'}`}></div>) } 
          </div>

          {/* Dashboard content */}
          { board?.map((item, index) => 
            <div className='relative z-10'
              style={{gridColumnStart: item.colStart, gridColumnEnd: item.colEnd, gridRowStart: item.rowStart, gridRowEnd: item.rowEnd}}
              key={index} 
            >
              <DashboardDynamicWidgetImport element={item.widget.element} />
            </div>
          )} 
        </div>
      </Container>
    </div>
  )
}

export default DashboardBoard;
