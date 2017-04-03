import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../actions/profile';
import { fetchProfileData } from '../../../actions/profile';

var AllocationGraph = React.createClass({
  displayName: 'Current Allocation',
	componentWillMount() {
    this.props.dispatch(fetchProfileData(this.props.token));
  },

  render() {
		var dataset = [];
		var labels = [];
		var colourWheel = ['#3399ff','#00cc00','#ffcc00','#ff3399','#666699','#33cccc','#996633','#993399','#ccffff','#ffffcc'];

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

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    portfolios: state.profile.portfolios
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

AllocationGraph.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    token: React.PropTypes.string,
    portfolios: React.PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(AllocationGraph);
export { AllocationGraph as AllocationGraphNotConnected };
