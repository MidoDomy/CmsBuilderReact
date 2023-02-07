import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

Chart.register(CategoryScale);

const DashboardWidgetStatisticalOverview: React.FC = () => {
  const StatisticakOverviewData = [
    {
      id: 1,
      year: 2016,
      visitors: 80000
    },
    {
      id: 2,
      year: 2017,
      visitors: 77677
    },
    {
      id: 3,
      year: 2018,
      visitors: 78888
    },
    {
      id: 4,
      year: 2019,
      visitors: 85000
    },
    {
      id: 5,
      year: 2020,
      visitors: 86300
    },
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
    <div className='h-full flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow'>
      <h5 className='mb-6 font-medium text-lg'>Statistical overview</h5>

      <div className='flex-1'>
        <Line className=' max-h-full' 
          data={chartData} 
          options={chartOptions}
        />
      </div>
    </div>
  )
}

export default DashboardWidgetStatisticalOverview;
