import {
    ADD_INVESTMENT,
    UPDATE_RISK_LEVEL,
    ADD_QUESTION,
    NEXT_QUESTION,
    PREVIOUS_QUESTION,
    SUBMIT_ANSWERS,
    TOGGLE_ANSWER,
<<<<<<< HEAD
    UPDATE_PROGRESS,
    CHANGE_OPTION
=======
    UPDATE_PROGRESS
>>>>>>> implemented progress bar
} from '../constants';

export function addInvestment(amount) {
    return {
        type: ADD_INVESTMENT,
        payload: {
            investment: amount
        }
    };
}

export function updateRiskLevel(riskLevel) {
    return {
        type: UPDATE_RISK_LEVEL,
        payload: {
            riskLevel
        }
    };
}

export function addQuestion(question, options) {
    return {
        type: ADD_QUESTION,
        payload: {
            question,
            options
        }
    };
}

export function toggleAnswer(answerIndex, questionIndex) {
    return {
        type: TOGGLE_ANSWER,
        payload: {
            answer: answerIndex,
            question: questionIndex
        },
    };
}

export function nextQuestion(index) {
    return {
        type: NEXT_QUESTION,
        payload: {
            questionNumber: index
        }
    };
}

export function prevQuestion(index) {
    return {
        type: PREVIOUS_QUESTION,
        payload: {
            questionNumber: index,
        }
    };
}

export function submitAnswer(risk) {
    return {
        type: SUBMIT_ANSWERS,
        payload: {
            riskLevel: risk
        }
    };
}

export function updateProgress (percent, color) {
    return {
        type: UPDATE_PROGRESS,
        payload: {
            percent: percent,
            color: color
        }
    }
}

export function changeOption (option) {
    return {
        type: CHANGE_OPTION,
        payload: {
            selectedOption: option,
        }
    }
}
