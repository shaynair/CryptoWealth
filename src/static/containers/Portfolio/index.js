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
    cash: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
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

    const styles = {
      chartStlye: {
        height: '250px'
      },
      titleStyle: {
        textAlign: 'center',
        fontSize: '46px',
        paddingBottom: '13px',
        paddingTop: '0px'
      }
    };

    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row" >
            <h1 style={styles.titleStyle} > Your Sample Portfolio! </h1>
          </div>
        </div>
        <div className="col-md-6">

          <div className="row" >

            <div className="portfolioChartWrapper">
              <PortfolioChart portfolio={this.props.data} />
            </div>

            <PortfolioTable portfolio={this.props.data} />

          </div>
        </div>
        <div className="col-md-offset-1 col-md-5">
          <div className="row">
            <br />
            <br />
            <br />
            <PortfolioType ptype={portfolioTypeName} />
            <SignUpForm />
          </div>
        </div>
      </div>
    );
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
