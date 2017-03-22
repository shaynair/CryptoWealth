import React, {Component} from 'react';

class Options extends Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        name: React.PropTypes.number.isRequired,
        answer: React.PropTypes.number.isRequired,
    };

    render() {
        if (this.props)
        return (
            <li className="col-md-8">
                <input type="radio" name={this.props.name}/>
                <span className="option-text"> {this.props.text} </span>
            </li>
        );
    }
}

export default Options;
