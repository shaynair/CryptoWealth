import React, { Button } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LineGraph from './chart';

import Logo from '../../images/logo.png';
import Hero from '../../images/hero.jpg';

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
      }
    };

    return (
      <div >
        <div className="hero-unit" >
          <h1 className="align-middle"> CryptoWealth </h1>
          <h2> View your customized portfolio for free today! </h2>
          <p> <Link className="btn btn-primary btn-large col-md-2 hero-button" to="/questionnaire">
          Start Questionnaire </Link>
          </p>
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
