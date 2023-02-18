import React from 'react';

import Image from 'components/Image';
import Button from 'components/Button';
import LayoutsEditContentBar from './content/LayoutsEditContentBar';

const LayoutsEditContent: React.FC = () => {
  return (
    <div className='relative max-h-full max-w-full overflow-auto pb-10 px-28'>
      <LayoutsEditContentBar />

      <div className='mt-32 mx-auto border border-gray-200 rounded-lg shadow'
        style={{
          width: '1280px',
          background: '#fff'
        }}
      >
        {/* Header */}
        <div className='py-2 border-b text-2xl text-center'>
          Header
        </div>

        {/* Content */}
        <div>
          {/* Section landing */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(18, 30px)',
              gridTemplateColumns: '1fr repeat(20, 40px) 1fr'
            }}
          >
            {/* Small text */}
            <div
              style={{
                gridColumnStart: 2, 
                gridColumnEnd: -2, 
                gridRowStart: 4, 
                gridRowEnd: 5,
                alignSelf: 'center'
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#14a7e9',
                  fontWeight: 500,
                  fontSize: '20px'
                }}
              >
                What is new
              </div>
            </div>

            {/* Headline */}
            <div
              style={{
                gridColumnStart: 2, 
                gridColumnEnd: -2, 
                gridRowStart: 5, 
                gridRowEnd: 11
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#0e172a',
                  fontWeight: 500,
                  fontSize: '72px',
                  lineHeight: '84px'
                }}
              >
                Take care of your performance every day.
              </div>
            </div>

            {/* Description */}
            <div
              style={{
                gridColumnStart: 5, 
                gridColumnEnd: -5, 
                gridRowStart: 11, 
                gridRowEnd: 13
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#66768d'
                }}
              >
                Build a well-presnted brand that everyone will love. Take care to develop resources continually and integrity them with previouse projects.
              </div>
            </div>

            {/* Button/Link */}
            <div
              style={{
                gridColumnStart: 1, 
                gridColumnEnd: -1, 
                gridRowStart: 14, 
                gridRowEnd: 16
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#66768d'
                }}
              >
                <Button variant='primary'>
                  Track your performance
                </Button>
              </div>
            </div>
          </div>

          {/* Section logos */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(22, 30px)',
              gridTemplateColumns: '1fr repeat(20, 40px) 1fr'
            }}
          >
            {/* Small text */}
            <div
              style={{
                gridColumnStart: 2, 
                gridColumnEnd: -2, 
                gridRowStart: 4, 
                gridRowEnd: 5,
                alignSelf: 'center'
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#14a7e9',
                  fontWeight: 500,
                  fontSize: '18px'
                }}
              >
                What is new
              </div>
            </div>

            {/* Headline */}
            <div
              style={{
                gridColumnStart: 2, 
                gridColumnEnd: -2, 
                gridRowStart: 5, 
                gridRowEnd: 10
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#0e172a',
                  fontWeight: 500,
                  fontSize: '56px',
                  lineHeight: '64px'
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>

            {/* Description */}
            <div
              style={{
                gridColumnStart: 5, 
                gridColumnEnd: -5, 
                gridRowStart: 10, 
                gridRowEnd: 12
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: '#66768d'
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio magni sequi quisquam quis rerum aliquid nobis ducimus reiciendis?
              </div>
            </div>

            {/* Logo card */}
            <div
              style={{
                gridColumnStart: 3, 
                gridColumnEnd: 8, 
                gridRowStart: 15, 
                gridRowEnd: 19
              }}
            >
              <div
                style={{
                  height: '100%',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#f9fafb'
                }}
              >
                <Image className='h-full w-full object-cover' alt='' />
              </div>
            </div>

            {/* Logo card */}
            <div
              style={{
                gridColumnStart: 9, 
                gridColumnEnd: 15, 
                gridRowStart: 14, 
                gridRowEnd: 20
              }}
            >
              <div
                style={{
                  height: '100%',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#f9fafb'
                }}
              >
                <Image className='h-full w-full object-cover' alt='' />
              </div>
            </div>

            {/* Logo card */}
            <div
              style={{
                gridColumnStart: 16, 
                gridColumnEnd: 21, 
                gridRowStart: 15, 
                gridRowEnd: 19
              }}
            >
              <div
                style={{
                  height: '100%',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#f9fafb'
                }}
              >
                <Image className='h-full w-full object-cover' alt='' />
              </div>
            </div>
          </div>

          {/* Section blogs */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(16, 30px)',
              gridTemplateColumns: '1fr repeat(20, 40px) 1fr'
            }}
          >
            {/* Blog card */}
            <div
              style={{
                gridColumnStart: 2, 
                gridColumnEnd: 11, 
                gridRowStart: 2, 
                gridRowEnd: 15
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: 'repeat(11, 30px)',
                  gridTemplateColumns: 'repeat(8, 40px)',
                  height: '100%',
                  padding: '16px', 
                  background: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px', 
                  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                }}
              >
                {/* Image */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 1, 
                    gridRowEnd: 8,
                    marginBottom: '10px',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}
                >
                  <Image className='h-full w-full object-cover' 
                    alt='' 
                  />
                </div>
    
                {/* Name */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 8, 
                    gridRowEnd: 9,
                    fontWeight: 500,
                    fontSize: '20px'
                  }}
                >
                  <div>
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
    
                {/* Description */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 9, 
                    gridRowEnd: 12,
                    paddingTop: '5px',
                    color: '#8491a3'
                  }}
                >
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, placeat aliquid quisquam.
                  </div>
                </div>
              </div>
            </div>

            {/* Blog card */}
            <div
              style={{
                gridColumnStart: 13, 
                gridColumnEnd: 22, 
                gridRowStart: 2, 
                gridRowEnd: 15
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: 'repeat(11, 30px)',
                  gridTemplateColumns: 'repeat(8, 40px)',
                  height: '100%',
                  padding: '16px', 
                  background: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px', 
                  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                }}
              >
                {/* Image */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 1, 
                    gridRowEnd: 8,
                    marginBottom: '10px',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}
                >
                  <Image className='h-full w-full object-cover' 
                    alt='' 
                  />
                </div>
    
                {/* Name */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 8, 
                    gridRowEnd: 9,
                    fontWeight: 500,
                    fontSize: '20px'
                  }}
                >
                  <div>
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
    
                {/* Description */}
                <div className='ring-2 ring-offset-2 ring-transparent hover:ring-sky-500 transition-all cursor-pointer'
                  style={{
                    gridColumnStart: 1, 
                    gridColumnEnd: -1, 
                    gridRowStart: 9, 
                    gridRowEnd: 12,
                    paddingTop: '5px',
                    color: '#8491a3'
                  }}
                >
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, placeat aliquid quisquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='py-2 border-t text-2xl text-center'>
          Footer
        </div>
      </div>
    </div>
  )
}

export default LayoutsEditContent;
