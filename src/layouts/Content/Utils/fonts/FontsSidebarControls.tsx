import React, {useState} from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

type Props = {
  fontSize: number;
  fontWeight: number;
}

const FontsSidebarControls: React.FC<Props> = ({fontSize, fontWeight}) => {
  return (
    <div className='pt-6 pb-8 px-5 rounded-lg bg-gray-100 border border-gray-200'>
      <div className='mb-5 font-medium text-2xl'>Test controls</div>

      {/* Text value */}
      <Form.Group>
        <Form.Input label='Text'
          defaultValue='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        />
      </Form.Group>

      {/* Font size */}
      <Form.Group>
        <Form.InputGroup label='Font size'>
          <Form.Input className='flex-1'
            defaultValue={fontSize}
          />

          <Form.InputGroupText>px</Form.InputGroupText>
        </Form.InputGroup>
      </Form.Group>

      {/* Font weight */}
      <Form.Group>
        <Form.Label>Font weight</Form.Label>
        <Row className='pt-2' 
          gapX={4} 
          gapY={8}
        >
          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight100'
              value={100}
              label='100'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight200'
              value={200}
              label='200'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight300'
              value={300}
              label='300'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight400'
              value={400}
              label='400'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight500'
              value={500}
              label='500'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight600'
              value={600}
              label='600'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight700'
              value={700}
              label='700'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight800'
              value={800}
              label='800'
              hideRadio
            />
          </Col>

          <Col>
            <Form.Radio className='py-0.5 px-1.5 bg-gray-200 rounded-3xl font-medium text-xs'
              checkedClasses='bg-gray-300'
              id='fontWeight'
              name='fontWeight900'
              value={900}
              label='900'
              hideRadio
            />
          </Col>
        </Row>
      </Form.Group>
    </div>
  )
}

FontsSidebarControls.defaultProps = {
  fontSize: 16,
  fontWeight: 400
}

export default FontsSidebarControls;
