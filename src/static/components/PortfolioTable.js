import React from 'react';


class PortfolioTable extends React.Component {
  static propTypes = {
    portfolio: React.PropTypes.array
  };
  render() {
    let portfolios = (< tr / >);

    if (this.props.portfolio != null) {
      portfolios = this.props.portfolio.map((asset, index) => {
        return (<tr className="assetRow" key= { index }>
          <td className="assetSymbol assetSymbolContainer">
            { asset.symbol }
          </td>
          <td className="assetName">
            { asset.name }
          </td>
          <td className="assetAlloc">
            { Math.round(asset.alloc * 10000) / 10000 }
          </td>
        </tr>)
      });
    }


    return (
      <div>
        <table className="table portfolio-table" id="portfolio-table">
          <tbody>
            <th className="theader">Symbol</th>
            <th className="theader">Asset</th>
            <th className="theader">Allocation</th>
            { portfolios }
          </tbody>
        </table>
      </div>
    );
    }
}


export { PortfolioTable };
