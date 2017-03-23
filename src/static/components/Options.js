import React, {Component} from 'react';

class Options extends Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
        name: React.PropTypes.number.isRequired,
        answer: React.PropTypes.string.isRequired,
        handleOptionChange: React.PropTypes.func.isRequired,
        selectedOption: React.PropTypes.number
    };

    render() {
        const radioStyle = {
          visibility: 'hidden'
        };

        let labelStyle;
        labelStyle = {
            display: 'block',
            padding: '20px 0',
            borderRadius: '15px',
            fontSize: '1.2em'
        };

        if (this.props.selectedOption === this.props.value) {
            labelStyle = Object.assign({}, labelStyle, {
               background: '#69FFAD'
            });
        } else {
            labelStyle = Object.assign({}, labelStyle, {
                background: '#FFFDFC',
            });
        } 

        return (
        <label style={labelStyle} className="col-12">
            <input type="radio" style={radioStyle} name={this.props.name} value={this.props.value}
                   checked={this.props.selectedOption === this.props.value}
                   onChange={this.props.handleOptionChange}
            />
            <span className="option-text"> {this.props.text} </span>
        </label>
        );
    }
}

export default Options;
