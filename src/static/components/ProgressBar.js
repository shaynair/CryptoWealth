import React, { Component } from 'react';
import { Line } from 'rc-progress';

class ProgressBar extends Component {
    static propTypes = {
        percent: React.PropTypes.string.isRequired,
        color: React.PropTypes.string.isRequired
    };

    render() {
        return (
          <div className="progress">
              <Line percent={ this.props.percent } strokeWidth="4" strokeColor={ this.props.color } />
          </div>
        );
    }
}

export default ProgressBar;