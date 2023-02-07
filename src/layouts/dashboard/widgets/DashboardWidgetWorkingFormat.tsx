import React from 'react';
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

Chart.register(CategoryScale);

const DashboardWidgetWorkingFormat: React.FC = () => {
  const StatisticakOverviewData = [
    {
      id: 1,
      type: 'Remote',
      visitors: 80
    },
    {
      id: 2,
      type: 'On site',
      visitors: 40
    }
  ];

  const chartData = {
    labels: ['Remote', 'On site'],
    datasets: [
      {
        labels: 'Working force',
        data: StatisticakOverviewData.map((data) => data.visitors),
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
    <div className='h-full flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow'>
      <h5 className='mb-6 font-medium text-lg'>Working format</h5>

      <div className='relative flex-1'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center'>
          <div className='font-medium text-slate-400'>Total</div>
          <div className='font-semibold text-2xl'>120</div>
        </div>

        <Doughnut className='max-h-full' 
          data={chartData} 
          options={chartOptions}
        />
      </div>
    </div>
  )
}

export default DashboardWidgetWorkingFormat;
