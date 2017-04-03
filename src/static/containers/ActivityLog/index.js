import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/profile';
import Activity from '../../components/Activity';

class ActivityLogView extends React.Component {

    static propTypes = {
        userName: React.PropTypes.string,
        activityLog: React.PropTypes.array
    };

    componentWillMount() {
        this.props.actions.fetchActivityLogData(this.props.token);
    }

    render() {
        let logData;
        if (this.props.activityLog.length > 0) {
            const activityLog = this.props.activityLog;

            logData = activityLog.map((activity, index) => {
                return (
                        <Activity time={activity.time} currencies={activity.currencies} key={index} />
                );
            });
        }
        return (
            <div id="profile-activity-log" className="container">
                <h3> Activity Log </h3>
                <hr />
                <table>
                    {logData}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
      activityLog: state.profile.activityLog
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLogView);
export { ActivityLogView as ActivityLogViewNotConnected };
