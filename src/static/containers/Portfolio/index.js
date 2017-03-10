import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dataFetchProtectedData } from '../../actions/portfolio';

class PortfolioView extends React.Component {

  static propTypes = {
      dispatch: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    /* Fetch portfolio data based on two parameters: { risk, cash } */
    this.props.dispatch(dataFetchProtectedData(5, 10000));
  }

  render() {
    return (<p> {JSON.stringify(this.props.data)} </p>);
  }
}

const mapStateToProps = (state) => {
    return {
      data: state.portfolio.data
    };
};

export default connect(mapStateToProps)(PortfolioView);
