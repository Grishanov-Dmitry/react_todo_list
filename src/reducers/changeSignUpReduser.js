import { defaultStore } from '../store';

export const signUpReduser = (state = defaultStore, action) => {

    switch (action.type) {

        case 'MAUSE_ON_BUTTON':
            return Object.assign({}, state, {
                greeting: action.greeting
            });
        case 'MAUSE_LEFT_BUTTON':
            return Object.assign({}, state, {
                greeting: action.greeting
            });
        case 'CHANGE_USER_NAME':
            return Object.assign({}, state, {
                userName: action.userName
            });
        case 'CHANGE_BUTTON_CONDITION':
            return Object.assign({}, state, {
                condition: action.condition,
                greeting: action.greeting
            });
        default:
            return state;
    }
};
