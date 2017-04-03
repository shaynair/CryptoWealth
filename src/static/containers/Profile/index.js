import React from 'react';
import './style.scss';
import AllocationGraph from  "./graphs/AllocationGraph";
import TrendGraph from "./graphs/TrendGraph";
import AnalyticsGraph from "./graphs/AnalyticsGraph";

import { SERVER_URL } from '../../utils/config';
import { checkHttpStatus, parseJSON } from '../../utils';

import * as actionCreators from '../../actions/profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProfileData} from '../../actions/profile';

const tabs =
  <ul className="nav nav-tabs">
    <li className="active" ><a data-toggle="tab" href="#profile-overview">Overview</a></li>
    <li><a data-toggle="tab" href="#profile-analytics">Analytics</a></li>
    <li><a data-toggle="tab" href="#profile-activity-log">Activity Log</a></li>
  </ul>;

  var data = {};

class ProfileView extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    userName: React.PropTypes.string,
    token: React.PropTypes.string,
    totalEarnings: React.PropTypes.number,
    totalValue: React.PropTypes.number,
    returns: React.PropTypes.number,
    portfolios: React.PropTypes.array
  };

  componentWillMount() {
    this.props.dispatch(fetchProfileData(this.props.token));
  }

  render() {

    const styles = {
      titleStyle: {
        fontSize: '40px',
        color: '#696969'
      }
    };

    return (
        <div className="container">
            <h1 style={styles.titleStyle} > Welcome, { this.props.userName } </h1>
            <hr />
            <section id="profile-overview" className="tab-pane fade in active">

                <div className="overview-graph col-md-9" >
                  <ul className="nav nav-tabs">
                    <li className="active" ><a data-toggle="tab" href="#graph1"> <i className="fa fa-pie-chart" /> Portfolio</a></li>
                    <li><a data-toggle="tab" href="#graph2"> <i className="fa fa-line-chart" /> Recent Trends</a></li>
                    <li><a data-toggle="tab" href="#graph3"> <i className="fa fa-bar-chart" /> Analytics</a></li>
                  </ul>

                  <div className="tab-content">
                    <div id="graph1" className="graph-div tab-pane fade in active">
                      <AllocationGraph portfolios={this.props.portfolios}/>
                    </div>
                    <div id="graph2" className="graph-div tab-pane fade">
                      <TrendGraph />
                    </div>
                    <div id="graph3" className="graph-div tab-pane fade">
                      <AnalyticsGraph />
                    </div>
                  </div>


                </div>
                <div className="overview-bar col-md-3">
                  <div className="overview-card">
                    <h4> Total Value of Portfolio: </h4>
                    <h1> ${this.props.totalValue}  </h1>
                  </div>
                  <div className="overview-card">
                    <h4> Total Earnings: </h4>
                    <h1> ${this.props.totalEarnings} </h1>
                  </div>
                  <div className="overview-card">
                    <h4> Total Returns: </h4>
                    <h2> {this.props.returns}% </h2>
                  </div>
                </div>

            </section>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    token: state.auth.token,
    totalEarnings: state.profile.totalEarnings,
    totalValue: state.profile.totalValue,
    returns: state.profile.returns,
    portfolios: state.profile.portfolios
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
export { ProfileView as ProfileViewNotConnected };
