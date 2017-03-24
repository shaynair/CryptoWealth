import React from 'react';
import { connect } from 'react-redux';

class ActivityLogView extends React.Component {

    static propTypes = {
        userName: React.PropTypes.string
    };

    // TODO: Add analytics here
    render() {
        return (
            <div id="profile-activity-log" className="container">
                <h3> Activity Log </h3>
                <hr />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
  };
};

export default connect(mapStateToProps)(ActivityLogView);
export { ActivityLogView as ActivityLogViewNotConnected };
