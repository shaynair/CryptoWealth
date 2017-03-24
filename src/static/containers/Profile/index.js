import React from 'react';
import './style.scss';
import AllocationGraph from  "./graphs/AllocationGraph";
import TrendGraph from "./graphs/TrendGraph";
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

  const person = {firstName:"Philip", lastName:"Banks", totalValue: "$200,000,000", totalEarnings: "$200,000", totalReturn: "10%"}

class ProfileView extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    userName: React.PropTypes.string,
    token: React.PropTypes.string,
    total: React.PropTypes.number,
    returns: React.PropTypes.number,
    portfolios: React.PropTypes.object
  };

  componentWillMount() {
    this.props.dispatch(fetchProfileData(this.props.token));
    console.log(this.props.portfolios);
  }

  render() {
    return (
        <div className="container">
            <h1> Welcome, { this.props.userName } </h1>
            <hr />
            <section id="profile-overview" className="tab-pane fade in active">
                <h3> Account Overview </h3>
                
                <div className="overview-graph col-md-9" >

                  <ul className="nav nav-tabs">
                    <li className="active" ><a data-toggle="tab" href="#graph1">Portfolio</a></li>
                    <li><a data-toggle="tab" href="#graph2">Recent Trends</a></li>
                    <li><a data-toggle="tab" href="#graph3">Future Projections</a></li>
                  </ul>

                  <div className="tab-content">
                    <div id="graph1" className="graph-div tab-pane fade in active">
                      <AllocationGraph />
                    </div>
                    <div id="graph2" className="graph-div tab-pane fade">
                      <TrendGraph />
                    </div>
                    <div id="graph3" className="graph-div tab-pane fade">
                      <h4> Insert Graph 3 here @Har0ld </h4>
                    </div>
                  </div>


                </div>
                <div className="overview-bar col-md-3">
                  <div className="overview-card">
                    <h4> Total Value of Portfolio: </h4>
                    <h1> { person["totalValue"]}  </h1>
                  </div>
                  <div className="overview-card">
                    <h4> Total Earnings: </h4>
                    <h1> {person["totalEarnings"]} </h1>
                  </div>
                  <div className="overview-card">
                    <h4> Total Returns: </h4>
                    <h2> {person["totalReturn"]} </h2>
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
    total: state.profile.total,
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
