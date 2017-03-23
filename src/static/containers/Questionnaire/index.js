import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';

import * as actionCreators from '../../actions/questionnaire';
import './style.scss';
import Options from '../../components/Options';
import Question from '../../components/Question';
import ProgressBar from '../../components/ProgressBar';

// TODO [ian]: highlight label when radio button is selected
// TODO [ian]: update style for next and prev buttons
class QuestionnaireView extends Component {
    static propTypes = {
        currentQuestion: React.PropTypes.number.isRequired,
        question: React.PropTypes.object.isRequired,
        answers: React.PropTypes.array.isRequired,
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

    getCheckedOption = () => {
        const radios = document.getElementsByTagName('input');
        let index = null;
        for (let i = 0; i < radios.length; i += 1) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                index = i;
            }
        }
        return index;
    };

    handleOptionChange = () => {
        const index = this.getCheckedOption();
        const label = document.getElementsByTagName('label');
        this.props.actions.changeOption(index);
    };

    nextQuestion = (e) => {
        e.preventDefault();
        const index = this.props.currentQuestion + 1;

        const radios = document.getElementsByTagName('input');
        let checkedOption = this.getCheckedOption();

        if (checkedOption >= 0 && checkedOption !== null) {
            const current = this.props.currentQuestion;
            this.props.actions.toggleAnswer(checkedOption, current);
        }

        if (index <= this.props.totalQuestions && checkedOption !== null) {
            const risk = this.props.riskLevel + this.props.question.optionRisks[checkedOption];
            this.props.actions.updateRiskLevel(risk);

            // reset selected options
            this.props.actions.changeOption(-1);

            // change question
            this.props.actions.nextQuestion(index);

            // update progress bar
            let percent = 20 + (index / this.props.totalQuestions) * 100;
            const color = this.chooseColor(percent);
            console.log('percent');
            console.log(percent);
            this.props.actions.updateProgress(percent.toString(), color);
        }
    };

    chooseColor = (percent) => {
        let color;
        if (percent <= 33){
            color = '#FF4B41';
        } else if (percent <= 66) {
            color = '#FF9920';
        } else if (percent >= 75) {
            color = '#A7FF34';
        } else if (percent === 100){
            color = '#1BA42C';
        }
        return color;
    };

    prevQuestion = (e) => {
        e.preventDefault();
        const index = this.props.currentQuestion - 1;

        if (index >= 0) {
            // update risk level
            const answer = this.props.answers[index];
            const risk = this.props.riskLevel - this.props.question.optionRisks[answer];
            this.props.actions.updateRiskLevel(risk);

            // change question
            this.props.actions.prevQuestion(index);

            // update progress bar
            let percent = (index / this.props.totalQuestions) * 100;
            const color = this.chooseColor(percent);
            this.props.actions.updateProgress(percent.toString(), color);
        }
    };

    submitQuestionnaire = (e) => {
        e.preventDefault();
        const checkedOption = this.getCheckedOption();

        const totalRisk = this.props.riskLevel + this.props.question.optionRisks[checkedOption];
        const risk = Math.round(totalRisk / this.props.totalQuestions);
        this.props.actions.submitAnswer(risk);
        this.props.dispatch(push('/portfolio'));
    };

    render() {
        let nextBtn = null;
        if ((this.props.currentQuestion + 1) === this.props.totalQuestions) {
            nextBtn = (<button className="btn-info col-md-1" onClick={this.submitQuestionnaire}>Submit</button>);
        } else {
            nextBtn = (<button className="btn-primary col-md-1" onClick={this.nextQuestion}>Next</button>);
        }

        let prevBtn = null;
        if ((this.props.currentQuestion) !== 0) {
            prevBtn = (<button className="btn-danger col-md-1" onClick={this.prevQuestion}>
                Go Back
            </button>);
        }

        return (<div className="wrapper">
                <ProgressBar percent={ this.props.percent } color={ this.props.color } />
                <Question propQuestion={this.props.question.text}/>
                <form className="questions">
                    <ul className="container-fluid options">
                        {
                            this.props.question.options.map(
                                (option, index) => {
                                    return (<Options
                                        key={index}
                                        value={index}
                                        text={option}
                                        name={this.props.currentQuestion}
                                        answer={this.props.answers[this.props.currentQuestion].toString()}
                                        handleOptionChange={this.handleOptionChange}
                                        selectedOption={this.props.selectedOption}
                                    />);
                                })
                        }
                    </ul>
                    <div className="container-fluid">
                        { prevBtn }
                        { nextBtn }
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // noinspection JSUnresolvedVariable
    return {
        question: state.quest.question,
        answers: state.quest.answers,
        currentQuestion: state.quest.currentQuestion,
        totalQuestions: state.quest.totalQuestions,
        riskLevel: state.quest.riskLevel,
        percent: state.quest.percent,
        color: state.quest.color,
        selectedOption: state.quest.selectedOption
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireView);
export {QuestionnaireView as QuestionnaireViewNotConnected};
