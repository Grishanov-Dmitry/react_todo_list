import { combineReducers } from 'redux';
import { signUpReduser } from './changeSignUpReduser';
import { categoryReduser } from './categoryReduser';
import { todoReduser } from './todoReduser';

export default combineReducers({
        signUpReduser,
        categoryReduser,
        todoReduser

});
