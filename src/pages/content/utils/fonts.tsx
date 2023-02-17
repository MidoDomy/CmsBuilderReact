import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';
import FontsModalImport from 'layouts/content/utils/fonts/FontsModalImport';
import FontsCard from 'layouts/content/utils/fonts/FontsCard';
import FontsSidebarControls from 'layouts/content/utils/fonts/FontsSidebarControls';

const Fonts: NextPage = () => {
  const fonts = [
    {name: 'Sans serif', weights: ['100', '200', '300', '400', '500', '600']},
    {name: 'Roboto', weights: ['100', '400', '500', '600']},
    {name: 'Hanken Grotesk', weights: ['300', '400', '500', '600']},
    {name: 'Chivo Mono', weights: ['400', '600']},
    {name: 'Unbounded', weights: ['200', '400', '600']}
  ];

  const [showModalImport, setShowModalImport] = useState(false);
  const [testText, setTestText] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.');
  const [testFontSize, setTestFontSize] = useState(22);
  const [testFontWeight, setTestFontWeight] = useState(400);
  const [testItalic, setTestItalic] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Fonts'
        description='Add fonts that you will use in your project.'
        actions={
          <Button onClick={() => setShowModalImport(true)}>
            <Icon name='plus' size={18} />
            <span>Import font</span>
          </Button>
        }
      />

      {/* Modal import */}
      <FontsModalImport 
        isOpen={showModalImport}
        onClose={() => setShowModalImport(false)}
      />

      {/* Content */}
      <div>
        <Container>
          <Row>
            <Col span={8}>
              <Row gapX={16} gapY={16}>
                {fonts?.map((font, index) => (
                  <Col span={12} key={index}>
                    <FontsCard 
                      name={font.name} 
                      weights={font.weights} 
                      text={testText}
                      fontSize={testFontSize}
                      fontWeight={testFontWeight}
                      italic={testItalic}
                    />
                  </Col>
                ))}
              </Row>
            </Col>

            <Col span={4}>
              <FontsSidebarControls 
                text={testText}
                setText={setTestText}
                fontSize={testFontSize}
                setFontSize={setTestFontSize}
                fontWeight={testFontWeight}
                setFontWeight={setTestFontWeight}
                italic={testItalic}
                setItalic={setTestItalic}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Fonts;
