import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PriceChartProps {
  category: string;
  products: string[];
}

const PriceChart: React.FC<PriceChartProps> = ({ category, products }) => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Price Chart',
    },
    xAxis: {
      categories: products,
      title: {
        text: 'Products',
      },
    },
    yAxis: {
      title: {
        text: 'Price',
      },
    },
    series: [
      
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default PriceChart;
