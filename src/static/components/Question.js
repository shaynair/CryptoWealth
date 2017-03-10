import React, { Component } from 'react';

class Question extends Component {
    render(){
        return(
            <h1>{this.props.propQuestion}</h1>
        )
    }
}
Question.propTypes = {
    propQuestion: React.PropTypes.string.isRequired
};

export default Question;