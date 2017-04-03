import React, { Button } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LineGraph from './chart';

import './style.scss';

class HomeView extends React.Component {

  static propTypes = {
    statusText: React.PropTypes.string,
    userName: React.PropTypes.string
  };

  render() {

    const styles = {
      containerStyle: {
        width: '100%',
        height: '100%'
      },
      btnStyle: {
        color: '#5C6F68'
      },
      titleStyle: {
        color: '#8AA39B',
        fontSize: '90px'
      }
    };

    return (
      <div >
        <div className="hero-unit" >

          <div className="overview-graph col-md-7">
            <div className="row">
              <h1 style={styles.titleStyle}> CryptoWealth </h1>
            </div>
          </div>

          <div className="overview-graph col-md-5">
            <h2> View your customized portfolio for free today! </h2>
            <p> <Link style={styles.btnStyle} className="btn btn-default btn-lg" to="/questionnaire">
              Start Questionnaire </Link>
            </p>
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

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
