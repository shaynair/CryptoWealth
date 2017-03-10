import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dataFetchProtectedData } from '../../actions/portfolio';
import { PortfolioTable } from './PortfolioTable';


class PortfolioView extends React.Component {

  static propTypes = {
      dispatch: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    /* Fetch portfolio data based on two parameters: { risk, cash } */
    this.props.dispatch(dataFetchProtectedData(this.props.risk, 10000));
  }

  render() {
    return ( <PortfolioTable portfolio={ this.props.data }></PortfolioTable> );
  }
}

const mapStateToProps = (state) => {
    return {
      data: state.portfolio.data,
      risk: state.quest.riskLevel
    };
};

export default connect(mapStateToProps)(PortfolioView);
