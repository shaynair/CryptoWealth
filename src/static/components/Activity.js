import React, {Component} from 'react';

class Activity extends Component {
    static propTypes = {
        time: React.PropTypes.string.isRequired,
        currencies: React.PropTypes.object.isRequired
    };

    render(){
        const style = {
            paddingRight: '50px',
            paddingBottom: '15px'
        };

        let currencies = [];
        let i = 0;
        for (const currency in this.props.currencies) {
            const allocations = this.props.currencies[currency];
            const allocationBefore = (allocations[0]).toFixed(3);
            const allocationAfter = (allocations[1]).toFixed(3);
            if (allocationBefore === allocationAfter) {
                continue;
            }
            currencies.push(
                <tr key={i}>
                    <td style={style}> {currency} </td>
                    <td style={style}> {(allocationAfter - allocationBefore).toFixed(3)} </td>
                </tr>
            );
            i++;
        }

        if (currencies.length === 0) {
            return null;
        }

        return (
            <tbody>
                <tr>
                    <th> Date </th>
                    <td style={style}>{(this.props.time)}</td>
                </tr>
                <tr>
                    <th> Currency </th>
                    <th> Net Change </th>
                </tr>
                {currencies}
            </tbody>
        );
    }
}

export default Activity;