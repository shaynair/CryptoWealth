import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';

class PortfolioTable extends React.Component {
    render() {
        if (this.props.portfolio != null ) {
            var portfolios = this.props.portfolio.map(function(asset) {
                return (
                    <tr>
                        <td className='assetSymbol'> { asset.symbol } </td>
                        <td className='assetName'>  { asset.name } </td>
                        <td className='assetSymbol'> { asset.alloc } </td>
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
                <tbody>
                <tr>
                    <th> Symbols </th>
                    <th> Assets </th>
                    <th> Allocation </th>
                </tr>
                        { portfolios }
                </tbody>
            </table>
        );
    }
}

export { PortfolioTable };
