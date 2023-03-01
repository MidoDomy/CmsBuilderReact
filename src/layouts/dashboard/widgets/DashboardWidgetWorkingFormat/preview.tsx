import React from 'react';
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

Chart.register(CategoryScale);

const DashboardWidgetWorkingFormatPreview: React.FC = () => {
  const StatisticakOverviewData = [
    {id: 1, type: 'Remote', workers: 80},
    {id: 2, type: 'On site', workers: 40}
  ];

  const chartData = {
    labels: ['Remote', 'On site'],
    datasets: [
      {
        labels: 'Working force',
        data: StatisticakOverviewData.map((data) => data.workers),
        backgroundColor: [
          "rgb(186 230 253)",
          "rgba(14 165 233)"
        ],
        borderWidth: 2,
      },
    ]
  };

  const chartOptions = {
    cutout: "60%",
    layout: {
      padding: 10
    }
  };

  return (
    <div>
      <div className='mb-3 font-medium text-sm'>
        Working format
      </div>

      <div className='w-56 mx-auto'>
        <Doughnut
          data={chartData} 
          options={chartOptions}
        />
      </div>
    </div>
  )
}

export default DashboardWidgetWorkingFormatPreview;
