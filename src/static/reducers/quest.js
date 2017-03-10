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
        text: "How long are you looking to invest for?",
        options: ['0 - 6 months', '6 - 12 months', '1 - 3 years', '3 - 5 years', '5 - 10 years'],
        optionRisks: [1, 3, 5, 7, 10]
    },
    2: {
        text: "What's your primary reason for investing?",
        options: ["Retirement", "Children's education", "Saving for the long-term", "Wedding fund", "Buying a house", "Other"],
        optionRisks: [1, 3, 6, 2, 9, 2]
    },
    3: {
        text: "Do you currently have any debt?",
        options: ["Yes :(", "No!"],
        optionRisks: [4, 8]
    },
    4: {
      text: "Do you have an emergency fund?",
      options: ["Yes", "No"],
      optionRisks: [10, 3]
    },
    5: {
      text: "What is your annual income?",
      options: ["Less than 60k", "60k - 90k", "91k - 140k", "141 - 200k", "200k or more"],
      optionRisks: [1, 3, 5, 7, 10]
    }
};

const initialState = {
    currentQuestion : 1,
    question: questions[1],
    answers: [-1, -1, -1, -1, -1],
    riskLevel: 0,
    investment: 0,
    totalQuestions: 5
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
