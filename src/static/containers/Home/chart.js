<<<<<<< HEAD
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
=======

import React from 'react';
import {Bubble} from 'react-chartjs-2';

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
<<<<<<< HEAD
      pointBorderColor: '#F7Ef6A',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#F7Ef6A',
=======
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
<<<<<<< HEAD
      data: [30, 45, 40, 39, 43, 55, 43, 49, 50, 59, 60, 63]
=======
      data: [{x:10,y:20,r:5}]
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f
    }
  ]
};

export default React.createClass({
<<<<<<< HEAD
  displayName: 'LineGraph',
=======
  displayName: 'BubbleExample',
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Line data={data} />
=======
        <h2>Bubble Example</h2>
        <Bubble data={data} />
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f
      </div>
    );
  }
});
