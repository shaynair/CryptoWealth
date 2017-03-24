import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import AllocationGraph from  "./graphs/AllocationGraph";
import TrendGraph from "./graphs/TrendGraph";

const tabs =
  <ul className="nav nav-tabs">
    <li className="active" ><a data-toggle="tab" href="#profile-overview">Overview</a></li>
    <li><a data-toggle="tab" href="#profile-analytics">Analytics</a></li>
    <li><a data-toggle="tab" href="#profile-activity-log">Activity Log</a></li>
  </ul>;

  const person = {firstName:"Philip", lastName:"Banks", totalValue: "$200,000,000", totalEarnings: "$200,000", totalReturn: "10%"}

class ProfileView extends React.Component {

  static propTypes = {
    userName: React.PropTypes.string
  };

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
                    <li><a data-toggle="tab" href="#graph3">Graph3 </a></li>
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
  };
};

export default connect(mapStateToProps)(ProfileView);
export { ProfileView as ProfileViewNotConnected };
