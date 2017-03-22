import React from 'react';

// sample portfolios: A=Conservative; B=Aggressive
// var portfolioA = '{ "assets" : [' +
//     '{ "assetSymbol":"BTC" , "assetName":"Bitcoin" , "assetAlloc":"20"},' +
//     '{ "assetSymbol":"ETC" , "assetName":"Ethereum" , "assetAlloc":"21"},' +
//     '{ "assetSymbol":"DASH" , "assetName":"Dash" , "assetAlloc":"19"},' +
//     '{ "assetSymbol":"XRP" , "assetName":"Ripple" , "assetAlloc":"15"},' +
//     '{ "assetSymbol":"XMR" , "assetName":"Monero" , "assetAlloc":"25"}]}';


class PortfolioTable extends React.Component {
  static propTypes = {
    portfolio: React.PropTypes.array
  };
  render() {
    let portfolios = (< tr / >);
    if (this.props.portfolio != null) {
      portfolios = this.props.portfolio.map((asset) => {
        return (<tr>
          <td className="assetSymbol">
            { asset.symbol }
          </td>
          <td className="assetName">
            { asset.name }
          </td>
          <td className="assetSymbol">
            { asset.alloc }
          </td>
        </tr>
        );
      });
    }

    return (<table className="table" id="portfolio-table">
      <thead>
        <th>Symbols</th>
        <th>Assets</th>
        <th>Allocation</th>
        { portfolios }
      </thead>
    </table>
    );
  }
}

export default PortfolioTable;
