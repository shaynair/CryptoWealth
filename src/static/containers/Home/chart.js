import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'November', 'December'],
  datasets: [
    {
      label: 'Your Portfolio',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#F7Ef6A',
      borderColor: '#F7Ef6A',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#F7Ef6A',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#F7Ef6A',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 45, 40, 39, 43, 55, 43, 49, 50, 59, 60, 63]
    }
  ]
};

export default React.createClass({
  displayName: 'LineGraph',

  render() {
    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
});
