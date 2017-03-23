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
            fontSize: '1.2em',
            color: '#303030',
            marginBottom: '0',
            fontWeight: 'normal'
        }; 
        console.log('total options');
        console.log(this.props.totalOptions);

        if (this.props.value === 0) {
            labelStyle = Object.assign({}, labelStyle, {
                borderRadius: '20px 20px 0 0'
            });
        } else if (this.props.value === this.props.totalOptions - 1) {
            labelStyle = Object.assign({}, labelStyle, {
                borderRadius: '0 0 20px 20px'
            });
        }

        if (this.props.selectedOption === this.props.value) {
            labelStyle = Object.assign({}, labelStyle, {
                background: '#ED7957',
                color: 'white'
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
