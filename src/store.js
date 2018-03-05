/**
 * Created by Dima on 19.01.2018.
 */

import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducers';
import { tempReduser } from './reducers/tempReduser';

 export const defaultStore =  {
    value: '',
    condition: 'initial',
    greeting: 'Sign up',
    userName: 'Guest',
    welcome: 'Good day, dear ',
    item: true,  // temp
    selectCategoryId: '',
     curentTodo: {},
    editTodoFieldShow: false,
     createTodoFieldShow: false,
     addNewCategoryInputShow: false,
     changeCategoryNameInputShow: false,
     selectCategoryValue: '',
     showEndedTodo: true,

    categories: []

};

export const store = createStore(tempReduser, defaultStore);



window.store = store;




