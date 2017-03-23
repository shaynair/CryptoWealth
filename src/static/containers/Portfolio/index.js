import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dataFetchProtectedData } from '../../actions/portfolio';

import { PortfolioTable } from '../../components/PortfolioTable';



class PortfolioView extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    risk: React.PropTypes.number.isRequired,
    data: React.PropTypes.array
  };

  componentWillMount() {
        /* Fetch portfolio data based on two parameters: { risk, cash } */
    this.props.dispatch(dataFetchProtectedData(this.props.risk, 10000));
  }

  render() {

    return ( <div className="col-md-6 col-md-offset-3">
            <h3 className="table-header col-md-4 col-md-offset-4"> Sample Portfolio </h3>
          <PortfolioTable portfolio={ this.props.data }></PortfolioTable>
      </div> );

  }
}

const mapStateToProps = (state) => {
  return {
    data: state.portfolio.data,
    risk: state.quest.riskLevel
  };
};

export default connect(mapStateToProps)(PortfolioView);
