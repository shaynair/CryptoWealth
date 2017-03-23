import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import './style.scss';



const tabs = 
  <ul className="nav nav-tabs">
    <li className="active" ><a data-toggle="tab" href="#profile-overview">Overview</a></li>
    <li><a data-toggle="tab" href="#profile-analytics">Analytics</a></li>
    <li><a data-toggle="tab" href="#profile-activity-log">Activity Log</a></li>
  </ul>;

  const person = {firstName:"Philip", lastName:"Banks", totalValue: "$200,000,000", totalEarnings: "$200,000", totalReturn: "10%"}


class ProfileView extends React.Component {

  static propTypes = {
    statusText: React.PropTypes.string,
    userName: React.PropTypes.string
  };

  render() {
    return (
        <div className="container">
            <h1> Hi, { person["firstName"] } {person["lastName"] } </h1>
            { tabs }
            <div className="tab-content">
                <div id="profile-overview" className="tab-pane fade in active">
                    <h3> Account Overview </h3>
                    <div className="overview-graph col-md-9" >

                      <ul className="nav nav-tabs">
                        <li className="active" ><a data-toggle="tab" href="#graph1">Graph1 </a></li>
                        <li><a data-toggle="tab" href="#graph2">Graph2 </a></li>
                        <li><a data-toggle="tab" href="#graph3">Graph3 </a></li>
                      </ul>

                      <div className="tab-content">
                        <div id="graph1" className="graph-div tab-pane fade in active"> 
                          <h4> Insert Graph 1 here @Har0ld </h4>
                        </div>
                        <div id="graph2" className="graph-div tab-pane fade"> 
                          <h4> Insert Graph 2 here @Har0ld </h4>
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
                    
                </div>
              
              <div id="profile-analytics" className="tab-pane fade">
                <h3> Analytics </h3>
              </div>
              <div id="profile-activity-log" className="tab-pane fade">
                <h3> Activity Log </h3>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    statusText: state.auth.statusText
  };
};

export default connect(mapStateToProps)(ProfileView);
export { ProfileView as ProfileViewNotConnected };
