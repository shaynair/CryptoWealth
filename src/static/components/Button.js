import React, {Component} from 'react';

class Button extends Component {
    static propTypes = {
        classes: React.PropTypes.string,
        handleClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    };

    render() {

        return (
            <button className={this.props.classes} onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;