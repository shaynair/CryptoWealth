import React from 'react';
import { connect } from 'react-redux';

class AnalyticsView extends React.Component {

    static propTypes = {
        userName: React.PropTypes.string
    };

    // TODO: Add analytics here
    render() {
        return (
            <div className="container">
                <h3> Analytics </h3>
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

export default connect(mapStateToProps)(AnalyticsView);
export { AnalyticsView as AnalyticsViewNotConnected };
