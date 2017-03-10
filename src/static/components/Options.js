import React, { Component } from 'react';

class Options extends Component {
    static propTypes = {
    propText: React.PropTypes.string.isRequired,
        name: React.PropTypes.number.isRequired
};
    render(){
        return (
            <label>
                <input type="radio" name={this.props.name}/>
                {this.props.propText}
            </label>
        )
    }
}

export default Options;