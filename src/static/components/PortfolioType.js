import React from 'react';

class PortfolioType extends React.Component {
  static propTypes = {
    ptype: React.PropTypes.string
  };
  render() {
    let portfolioTypes = { conservative:"Based on the information you provided us about yourself, we recommend a portfolio asset mix focused on income. Your returns will rarely fluctuate, provide income, and give returns just above inflation. You can always change your plan at any time.", balanced:"Based on the information you provided us about yourself, we recommend a portfolio asset mix roughly split between growth and income. You can expect to see some downturns, for returns above inflation. You can always change your plan at any time.", aggressive:"Your portfolio asset mix is focused on growth. Based on the information you provided us about yourself, we recommend a long-term time frame with ability to accept some ups and downs to achieve the highest return. You can always change your plan at any time.", error:"An error occurred... (╯°□°）╯︵ ┻━┻"};

    let portfolioTypeText = "";
    if (this.props.ptype == "error" || this.props.ptype == "undefined") {
      portfolioTypeText = portfolioTypes.error;
    } else if (this.props.ptype == "Conservative") {
      portfolioTypeText = portfolioTypes.conservative;
    } else if (this.props.ptype == "Balanced") {
      portfolioTypeText = portfolioTypes.balanced;
    } else if (this.props.ptype == "Aggressive") {
      portfolioTypeText = portfolioTypes.aggressive;
    } else {
      portfolioTypeText = "A serious error occurred... returned ptype is: " + this.props.ptype;
    }

    return (
      <div className="portfolioTypeWrapper">
        <div className="porfolioTypeName">
          <h4>{this.props.ptype}</h4>
        </div>
        <div className="portfolioTypeDescription">
          {portfolioTypeText}
        </div>
        <span>
          <br/>
        </span>
      </div>
    );

  }
}

export default PortfolioType;
