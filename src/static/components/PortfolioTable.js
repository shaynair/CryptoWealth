import React from 'react';


class PortfolioTable extends React.Component {
  static propTypes = {
    portfolio: React.PropTypes.array
  };
  render() {
    let portfolios = (< tr / >);

    if (this.props.portfolio != null) {
      portfolios = this.props.portfolio.map((asset, index) => {
        return (<tr key= { index }>
          <td className="assetSymbol">
            { asset.symbol }
          </td>
          <td className="assetName">
            { asset.name }
          </td>
          <td className="assetSymbol">
            { asset.alloc }
          </td>
        </tr>)
      });
    }


    return (<div>
        <table className="table portfolio-table" id="portfolio-table">
          <thead>
            <th className="theader">Symbols</th>
            <th className="theader">Assets</th>
            <th className="theader">Allocation</th>
            { portfolios }
          </thead>
        </table>
        <div className="portfolioChartWrapper" ref="portfolioChartWrapper">
        </div>
      </div>);
    }
}


export { PortfolioTable };
