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
