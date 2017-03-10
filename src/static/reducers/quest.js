import { createReducer } from '../utils';
import {
    ADD_INVESTMENT,
    UPDATE_RISK_LEVEL,
    ADD_QUESTION,
    TOGGLE_ANSWER,
    NEXT_QUESTION,
    PREVIOUS_QUESTION,
    SUBMIT_ANSWERS
} from '../constants';

const questions = {
    1: {
        text: "What's the main reason you're investing?",
        options: ['Buying a mansion', 'Saving for the end of the world', 'Get rich quick'],
        optionRisks: [7, 1, 10]
    },
    2: {
        text: "Q2",
        options: ["opt1", "opt2"],
        optionRisks: [7, 1]
    },
    3: {
        text: "Q3",
        options: ["opt1", "opt2"],
        optionRisks: [1, 10]
    }
};

const initialState = {
    currentQuestion : 1,
    question: questions[1],
    answers: [-1, -1, -1],
    riskLevel: 0,
    investment: 0,
    totalQuestions: 3
};

export default createReducer(initialState, {
    [ADD_INVESTMENT]: (state, payload) => {
        return Object.assign({}, state, {
            investment: payload.investment
        });
    },

    [UPDATE_RISK_LEVEL]: (state, payload) => {
        return Object.assign({}, state, {
            riskLevel: payload.riskLevel
        });
    },

    [ADD_QUESTION]: (state, payload) => {
        return Object.assign({}, state, {
            question: Object.assign({}, questions[payload.question])
        });
    },

    [TOGGLE_ANSWER]: (state, payload) => {
        return Object.assign({}, state, {
            answers: state.answers.map((answer, index) => {
                if (index != payload.question - 1) {
                    return answer
                }
                return payload.answer;
            })
        });
    },

    [NEXT_QUESTION]: (state, payload) => {
        return Object.assign({}, state, {
            currentQuestion: payload.questionNumber,
            question: questions[payload.questionNumber]
        });
    },

    [PREVIOUS_QUESTION]: (state, payload) => {
        return Object.assign({}, state, {
            currentQuestion: payload.questionNumber,
            question: questions[payload.questionNumber]
        });
    },

    [SUBMIT_ANSWERS]: (state, payload) => {
        return Object.assign({}, initialState, {
            riskLevel: payload.riskLevel
        });
    }
});