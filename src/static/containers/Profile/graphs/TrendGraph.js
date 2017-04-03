import React from 'react';
import { Line } from 'react-chartjs-2';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../actions/profile';
import { fetchHistoryData } from '../../../actions/profile';

function createDataset(label, dataset, color) {
      return {
        label: label,
        fill: false,
        lineTension: 2.0,
        backgroundColor: color,
        pointRadius: 1,
        data: dataset,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: color,
        borderColor: color
      };
}

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }



var TrendGraph = React.createClass({
  displayName: 'TrendGraph',
  componentWillMount() {
    console.log('stuff');
    this.props.dispatch(fetchHistoryData(this.props.token));
  },
  render() {
    var dataset = [];

  	var colourWheel = ['#3399ff','#00cc00','#ffcc00','#ff3399','#666699','#33cccc','#996633','#993399','#ccffff','#C06014'];

    var keys = Object.keys(this.props.history);
    var t = this;

    var times = undefined;

		if(keys.length != 0) {
			keys.forEach(function(value, index) {
        var values = t.props.history[value].map((element) => {
            return element.price;
        });

        if(!times) {
          times = t.props.history[value].map((element) => {
            var dateObj = new Date(element.date*1000);
            return formatDate(dateObj);
          });
        }
				dataset.push(createDataset(value, values, colourWheel[index]));
			});
		}

    if(!dataset || !times) {
      return null;
    }

    var finData = {
      labels : times,
      datasets: dataset
    }

    return (
      <div className="profile-graph">
        <Line data={finData} />
      </div>
    );
  }
});
<<<<<<< HEAD
=======

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    history: state.profile.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

TrendGraph.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    token: React.PropTypes.string,
    history: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendGraph);
export { TrendGraph as TrendGraphNotConnected };
>>>>>>> d6d4cbe224f5be809775ca5cd209ad0231b86d09
