import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import * as actionCreators from '../../actions/questionnaire';
import './style.scss';
import Options from '../../components/Options';
import Question from '../../components/Question';


class QuestionnaireView extends Component {
  static propTypes = {
    currentQuestion: React.PropTypes.number.isRequired,
    question: React.PropTypes.object.isRequired,
    riskLevel: React.PropTypes.number.isRequired,
    totalQuestions: React.PropTypes.number.isRequired,
    dispatch: React.PropTypes.func.isRequired,

    actions: React.PropTypes.shape({
      updateRiskLevel: React.PropTypes.func.isRequired,
      nextQuestion: React.PropTypes.func.isRequired,
      prevQuestion: React.PropTypes.func.isRequired,

      toggleAnswer: React.PropTypes.func.isRequired,
      submitAnswer: React.PropTypes.func.isRequired
    }).isRequired,
  };

  nextQuestion = (e) => {
    e.preventDefault();
    const index = this.props.currentQuestion + 1;

    const radios = document.getElementsByTagName('input');
    let value;
    for (let i = 0; i < radios.length; i += 1) {
      if (radios[i].type === 'radio' && radios[i].checked) {
                // get value, set checked flag or do whatever you need to
        value = i + 1;
      }
    }

    if (value) {
      const current = this.props.currentQuestion;
      this.props.dispatch(this.props.actions.toggleAnswer(value, current));
    }

    if (index <= this.props.totalQuestions && value != null) {
      const risk = this.props.riskLevel + this.props.question.optionRisks[value - 1];
      this.props.dispatch(this.props.actions.updateRiskLevel(risk));

            // change question
      this.props.dispatch(this.props.actions.nextQuestion(index));
    }
  };

  prevQuestion = (e) => {
    e.preventDefault();
    const index = this.props.currentQuestion - 1;

    if (index >= 1) {
            // update risk level

            // change question
      this.props.dispatch(this.props.actions.prevQuestion(index));
    }
  };

  submitQuestionnaire = (e) => {
    e.preventDefault();
    const radios = document.getElementsByTagName('input');
    let value;
    for (let i = 0; i < radios.length; i += 1) {
      if (radios[i].type === 'radio' && radios[i].checked) {
                // get value, set checked flag or do whatever you need to
        value = i + 1;
      }
    }
    const totalRisk = this.props.riskLevel + this.props.question.optionRisks[value - 1];
    const risk = Math.round(totalRisk / this.props.totalQuestions);
    this.props.dispatch(this.props.actions.submitAnswer(risk));
    this.props.dispatch(push('/portfolio'));
  };

  render() {
    let button = null;
    if (this.props.currentQuestion === this.props.totalQuestions) {
      button = (< button
className="btn-info col-md-1"
                    onClick={this.submitQuestionnaire}
      >
                    Submit < /button>);
    } else {
      button = (< button
className="btn-primary col-md-1"
                        onClick={this.nextQuestion}
      >
                        Next < /button>);
    }

    return (<
                        div className="container-fluid "
    >
      <
                        Question propQuestion={this.props.question.text}
      /> <
                        form className="questions"
      >
        <
                        ul className="container-fluid options"
        > {
                            this.props.question.options.map(
                                (option, index) => {
                                  return (< Options
key={index}
                                        propText={option}
                                        name={this.props.currentQuestion}
                                        onClick={this.handleInputChange}
                                  />);
                                })
                            } <
                            /ul> <
                            div className="container-fluid"
                            >
                              <
                            button className="btn-danger col-md-1"
                            onClick={this.prevQuestion}
                              >
                            Go Back < /button> { button } < /
                            div > <
                            /form> < /
                            div >
    );
  }
                }

const mapStateToProps = (state) => {
                    // noinspection JSUnresolvedVariable
  return {
    question: state.quest.question,
    currentQuestion: state.quest.currentQuestion,
    totalQuestions: state.quest.totalQuestions,
    riskLevel: state.quest.riskLevel
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireView);
export { QuestionnaireView as QuestionnaireViewNotConnected };