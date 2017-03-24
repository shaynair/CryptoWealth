import React, {Component} from 'react';

class Button extends Component {
    static propTypes = {
        classes: React.PropTypes.string,
        handleClick: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    };

    render() {

        return (
            <div className={this.props.classes}>
                <label>
                <button className={this.props.arrowClass} onClick={this.props.handleClick}/>
                    {this.props.text}
                </label>
            </div>
        );
    }
}

export default Button;