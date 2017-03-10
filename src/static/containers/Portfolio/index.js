import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';

class PortfolioView extends React.Component {
  render() {
    return (<h1> hi </h1>);
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(PortfolioView);
