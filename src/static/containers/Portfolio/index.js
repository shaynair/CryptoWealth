import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
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
  render() {
    return (<PortfolioTable portfolio={ portfolioA } > </PortfolioTable>);
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(PortfolioView);
