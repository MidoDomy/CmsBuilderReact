import React from 'react';

import Row from 'components/Row';
import Col from 'components/Col';
import Form from 'components/Form';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  fontWeight: number;
  setFontWeight: React.Dispatch<React.SetStateAction<number>>;
  italic: boolean;
  setItalic: React.Dispatch<React.SetStateAction<boolean>>;
}

const FontsSidebarControls: React.FC<Props> = ({text, setText, fontSize, setFontSize, fontWeight, setFontWeight, italic, setItalic}) => {
  return (
    <div className='sticky top-7 pt-6 pb-8 px-5 rounded-md bg-gray-100 border border-gray-200 shadow-sm hover:shadow transition-shadow'>
      <div className='mb-5 font-medium text-2xl'>Test controls</div>

      {/* Text value */}
      <Form.Group>
        <Form.Textarea 
          label='Text'
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        />
      </Form.Group>

      {/* Font size */}
      <Form.Group>
        <Form.InputGroup label='Font size'>
          <Form.Input className='flex-1'
            type='number'
            value={fontSize}
            onChange={(e: any) => setFontSize(e.target.value)}
          />

          <Form.InputGroupText>px</Form.InputGroupText>
        </Form.InputGroup>
      </Form.Group>

      {/* Font weight */}
      <Form.Group>
        <Form.Label>Font weight</Form.Label>
        <div className='pt-1' 
          onChange={(e: any) => setFontWeight(e.target.value)}
        >
          <Row gapX={4} gapY={8}>
            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 100 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight100'
                name='fontWeight'
                value={100}
                label='100'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 200 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight200'
                name='fontWeight'
                value={200}
                label='200'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 300 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight300'
                name='fontWeight'
                value={300}
                label='300'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 400 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight400'
                name='fontWeight'
                value={400}
                label='400'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 500 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight500'
                name='fontWeight'
                value={500}
                label='500'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 600 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight600'
                name='fontWeight'
                value={600}
                label='600'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 700 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight700'
                name='fontWeight'
                value={700}
                label='700'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 800 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight800'
                name='fontWeight'
                value={800}
                label='800'
                hideRadio
              />
            </Col>

            <Col>
              <Form.Radio className={`py-0.5 px-1.5 rounded-3xl font-medium text-xs [&_label]:opacity-100 ${fontWeight == 900 ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                id='fontWeight900'
                name='fontWeight'
                value={900}
                label='900'
                hideRadio
              />
            </Col>
          </Row>
        </div>
      </Form.Group>

      {/* Italic */}
      <Form.Group>
        <Form.Switch
          id='italic'
          checked={italic}
          label='Italic'
          small
          onChange={() => setItalic(!italic)}
        />
      </Form.Group>
    </div>
  )
}

FontsSidebarControls.defaultProps = {
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  fontSize: 22,
  fontWeight: 400,
  italic: false
}

export default FontsSidebarControls;
