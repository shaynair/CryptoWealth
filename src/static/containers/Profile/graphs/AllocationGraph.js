import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default React.createClass({
  displayName: 'Current Allocation',

  render() {
		var dataset = [];
		var labels = [];
		var colourWheel = ['#3399ff','#00cc00','#ffcc00','#ff3399','#666699','#33cccc','#996633','#993399','#ccffff','#ffffcc'];

		console.log("HI");
		console.log(this.props.portfolios);

		if(this.props.portfolios.length != 0) {
			this.props.portfolios.forEach(function(value, index) {
					dataset.push(value.allocation);
					labels.push(value.currency);
			})
		}

		var data = {
			labels: labels,
			datasets: [
				{
					data: dataset,
					backgroundColor: colourWheel,
					hoverBackgroundColor: colourWheel
				}]
		};

    return (
      <div className="profile-graph">
        <Doughnut data={data} />
      </div>
    );
  }
});
