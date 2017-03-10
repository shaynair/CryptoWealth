import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dataFetchProtectedData } from '../../actions/portfolio';
import { PortfolioTable } from './PortfolioTable';

var portfolioA = {
    data: [
        {
            symbol: "BTC",
            name: "Bitcoin",
            alloc: 20
        },
        {
            symbol: "ETC",
            name: "Ethereum",
            alloc: 21
        },
        {
            symbol: "DASH",
            name: "Dash",
            alloc: 19
        }
    ]
}


class PortfolioView extends React.Component {

  static propTypes = {
      dispatch: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    /* Fetch portfolio data based on two parameters: { risk, cash } */
    this.props.dispatch(dataFetchProtectedData(5, 10000));
  }

  render() {
    return (<PortfolioTable portfolio={ portfolioA } > </PortfolioTable>);
  }
}

const mapStateToProps = (state) => {
    return {
      data: state.portfolio.data
    };
};

export default connect(mapStateToProps)(PortfolioView);
