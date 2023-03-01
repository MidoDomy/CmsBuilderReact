import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

Chart.register(CategoryScale);

const DashboardWidgetStatisticalOverviewPreview: React.FC = () => {
  const StatisticakOverviewData = [
    {id: 1, year: 2016, visitors: 80},
    {id: 2, year: 2017, visitors: 77},
    {id: 3, year: 2018, visitors: 78},
    {id: 4, year: 2019, visitors: 85},
    {id: 5, year: 2020, visitors: 86},
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
    <div>
      <div className='mb-3 font-medium text-sm'>
        Statistical overview
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

export default DashboardWidgetStatisticalOverviewPreview;
