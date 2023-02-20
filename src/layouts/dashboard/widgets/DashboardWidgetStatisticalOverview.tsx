import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

import Row from 'components/Row';
import Col from 'components/Col';
import Button from 'components/Button';
import Icon from 'components/Icon';

Chart.register(CategoryScale);

const DashboardWidgetStatisticalOverview: React.FC = () => {
  const StatisticakOverviewData = [
    {id: 1, year: 2016, visitors: 80000},
    {id: 2, year: 2017, visitors: 77677},
    {id: 3, year: 2018, visitors: 78888},
    {id: 4, year: 2019, visitors: 85000},
    {id: 5, year: 2020, visitors: 86300},
  ];

  const chartData = {
    labels: StatisticakOverviewData.map((data) => data.year),
    datasets: [
      {
        label: "Visitors",
        data: StatisticakOverviewData.map((data) => data.visitors),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgb(14 165 233)"
        ],
        borderColor: "rgb(14 165 233)",
        borderWidth: 2,
      },
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  };
  
  return (
    <div className='h-full flex flex-col p-6 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow transition-shadow'>
      <div className='mb-6'>
        <Row justify='between' align='center'>
          <Col>
            <h5 className='font-medium text-lg'>Statistical overview</h5>
          </Col>

          <Col>
            <Button size='sm'>
              <Icon name='calendar' size={16} />
              Select date
            </Button>
          </Col>
        </Row>
      </div>

      <div className='flex-1'>
        <Line className='max-h-full' 
          data={chartData} 
          options={chartOptions}
        />
      </div>
    </div>
  )
}

export default DashboardWidgetStatisticalOverview;
