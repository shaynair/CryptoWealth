import React, {Component} from 'react';

class Investment extends Component {
    render() {
        const style = {
            fontSize: '1.5em'
        };

        return (
            <div className="input-group input-group-lg">
                <span className="input-group-addon">$</span>
                <input type="number"
                       id="investment"
                       className="form-control"
                       style={style}
                       aria-label="Amount (to the nearest dollar)"
                />
            </div>
        );

    }
}

export default Investment;