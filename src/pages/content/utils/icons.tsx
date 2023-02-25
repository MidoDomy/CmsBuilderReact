import type { NextPage } from 'next';
import { useState } from 'react';

import { FiPlus, FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify, FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight, FiArrowDown } from 'react-icons/fi';

import Row from 'components/Row';
import Col from 'components/Col';
import Layout from 'layouts/general/Layout';
import PageHeader from 'layouts/general/PageHeader';
import Container from 'components/Container';
import Button from 'components/Button';
import IconCard from 'layouts/content/utils/icons/IconsCard';
import IconsModalAdd from 'layouts/content/utils/icons/IconsModalAdd';

const Icons: NextPage = () => {
  const icons = [
    {value: <FiActivity size={22} />, name: 'FiActivity'},
    {value: <FiAirplay size={22} />, name: 'FiAirplay'},
    {value: <FiAlertCircle size={22} />, name: 'FiAlertCircle'},
    {value: <FiAlertOctagon size={22} />, name: 'FiAlertOctagon'},
    {value: <FiAlertTriangle size={22} />, name: 'FiAlertTriangle'},
    {value: <FiAlignCenter size={22} />, name: 'FiAlignCenter'},
    {value: <FiAlignJustify size={22} />, name: 'FiAlignJustify'},
    {value: <FiAlignLeft size={22} />, name: 'FiAlignLeft'},
    {value: <FiAlignRight size={22} />, name: 'FiAlignRight'},
    {value: <FiAnchor size={22} />, name: 'FiAnchor'},
    {value: <FiAperture size={22} />, name: 'FiAperture'},
    {value: <FiAperture size={22} />, name: 'FiAperture'},
    {value: <FiArchive size={22} />, name: 'FiArchive'},
    {value: <FiArrowDownCircle size={22} />, name: 'FiArrowDownCircle'},
    {value: <FiArrowDownLeft size={22} />, name: 'FiArrowDownLeft'},
    {value: <FiArrowDownRight size={22} />, name: 'FiArrowDownRight'},
    {value: <FiArrowDown size={22} />, name: 'FiArrowDown'}
  ]

  const [showModalAdd, setShowModalAdd] = useState(false);

  return (
    <Layout>
      {/* Page header */}
      <PageHeader
        title='Icons'
        description='Add icons that you will use in your project.'
        actions={
          <Button onClick={() => setShowModalAdd(true)}>
            <FiPlus size={18} />
            <span>Add icon</span>
          </Button>
        }
      />

      {/* Modal add icon */}
      <IconsModalAdd
        isOpen={showModalAdd}
        onClose={() => setShowModalAdd(false)}
      />

      {/* Content */}
      <div>
        <Container>
          <Row gapX={16} gapY={20}>
            {icons?.map((icon, index) => (
              <Col key={index}>
                <IconCard icon={icon.value} name={icon.name} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Icons;
