import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { dataFetchProtectedData } from '../../actions/portfolio';

import { PortfolioTable } from '../../components/PortfolioTable';
import PortfolioType from '../../components/PortfolioType';
import PortfolioChart from '../../components/PortfolioChart';
import SignUpForm from '../../components/SignUpForm';

import './style.scss';


class PortfolioView extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    risk: React.PropTypes.number.isRequired,
    cash: React.PropTypes.number.isRequired,
    data: React.PropTypes.array
  };

  componentWillMount() {
        /* Fetch portfolio data based on two parameters: { risk, cash } */
    this.props.dispatch(dataFetchProtectedData(this.props.risk, this.props.cash));
  }

  render() {
    let portfolioTypeName = "Undefined";
    if (this.props.risk >= 0 && this.props.risk <= 3) {
      portfolioTypeName = "Conservative";
    } else if (this.props.risk >= 4 && this.props.risk <= 6) {
      portfolioTypeName = "Balanced";
    } else if (this.props.risk >= 7 && this.props.risk <= 10) {
      portfolioTypeName = "Aggressive";
    } else {
      portfolioTypeName = "Error";
    }

    return (<div className="mainBody col-md-6 col-md-offset-3">
      <h3 className="table-header col-md">
        Here is your personalized portfolio:
      </h3>

      <PortfolioType ptype={portfolioTypeName} />
      <PortfolioTable portfolio={this.props.data} />
      <PortfolioChart portfolio={this.props.data}/>
      <SignUpForm />
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.portfolio.data,
    risk: state.quest.riskLevel,
    cash: state.quest.investment
  };
};

export default connect(mapStateToProps)(PortfolioView);
