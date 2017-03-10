import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';

//sample portfolios: A=Conservative; B=Aggressive
// var portfolioA = '{ "assets" : [' +
//     '{ "assetSymbol":"BTC" , "assetName":"Bitcoin" , "assetAlloc":"20"},' +
//     '{ "assetSymbol":"ETC" , "assetName":"Ethereum" , "assetAlloc":"21"},' +
//     '{ "assetSymbol":"DASH" , "assetName":"Dash" , "assetAlloc":"19"},' +
//     '{ "assetSymbol":"XRP" , "assetName":"Ripple" , "assetAlloc":"15"},' +
//     '{ "assetSymbol":"XMR" , "assetName":"Monero" , "assetAlloc":"25"}]}';


class PortfolioTable extends React.Component {
    render() {
        if (this.props.portfolio != null ) {
            var portfolios = this.props.portfolio.map(function(asset) {
                return (
                    <tr>
                        <td class='assetSymbol'> { asset.symbol } </td>
                        <td class='assetName'>  { asset.name } </td>
                        <td class='assetSymbol'> { asset.alloc } </td>
                    </tr>
                )
            })
        } else {
            var portfolio = (
                <tr>
                </tr>
            )
        }

        return (
            <table className="table" id="portfolio-table"> 
                <thead>
                    <th> Symbols </th>
                    <th> Assets </th>
                    <th> Allocation </th>
                    
                        { portfolios }
                </thead>
            </table>
        );
    }
}

export { PortfolioTable };
