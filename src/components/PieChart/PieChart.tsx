import React from 'react';
import { PieChart as Chart } from 'react-minimal-pie-chart';

interface PieChartProps {
  className: string;
  value: number;
}

const PieChart = ({ value, className }: PieChartProps) => {
  return (
    <Chart
      style={{ fill: '#fff' }}
      segmentsStyle={{ color: '#fff', backgroundColor: 'blue' }}
      data={[{ title: 'score', value, color: '#ff8e53' }]}
      lineWidth={36}
      totalValue={100}
      startAngle={270}
      className={className}
      label={() => `${value}%`}
      labelPosition={0}
      labelStyle={{ border: '1px solid red', fontSize: 20, fill: '#fff' }}
      animate
      background="white"
    />
  );
};

export default PieChart;
