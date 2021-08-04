import React from 'react';
import { PieChart as Chart } from 'react-minimal-pie-chart';

interface PieChartProps {
  className: string;
  value: number;
}

const PieChart = ({ value, className }: PieChartProps) => {
  return (
    <Chart
      data={[{ title: 'score', value, color: '#ff8e53' }]}
      lineWidth={36}
      totalValue={100}
      startAngle={270}
      className={className}
      label={() => `${value}%`}
      labelPosition={0}
      labelStyle={{ color: '#fff', backgroundColor: 'red' }}
      animate
      background="white"
    />
  );
};

export default PieChart;
