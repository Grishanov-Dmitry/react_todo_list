import { defaultStore } from '../store';


const changeCategories = (action, state) => {

    return state.categories.map((item) => {
        if (state.selectCategoryId === item.id) {
            return Object.assign({}, item, {
                    toDo: changeToDo(item, action)
                }
            )
        }
        return item
    })
};

const changeCurentTodo = (state, action) => {
    return {
        itemName: state.categories[action.categId].toDo[action.id].toDoName,
        itemDiscription: state.categories[action.categId].toDo[action.id].toDoDiscription
    }

};

const toggleChekedItem = (categories, state, action) => {

    let curentTodo = categories[action.categId].toDo[action.id];
    curentTodo = Object.assign({}, curentTodo, {
        checked: !curentTodo.checked
    });


    let curentCategTodo = categories[action.categId].toDo;
    curentCategTodo.splice(action.id, 1, curentTodo);
    let changingCategory = Object.assign({}, categories[action.categId], {
        toDo: curentCategTodo
    });

    categories.splice(action.categId, 1, changingCategory);
    return categories;



};

export const todoReduser = (state = defaultStore, action) => {

    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return Object.assign({}, state, {
                categories: changeCategories(action, state)
                }
            );
        case 'FIELD_ITEM_VISIBILITY_TRUE':
            return Object.assign({}, state, {
                createTodoFieldShow: true
                }
            );
        case 'FIELD_ITEM_VISIBILITY_FALSE':
            return Object.assign({}, state, {
                createTodoFieldShow: false
                }
            );
        case 'FIELD_EDIT_TODO_HIDE':
            return Object.assign({}, state, {
                editTodoFieldShow: false
                }
            );
        case 'SAVE_ITEM_CHANGES':
            return Object.assign({}, state, {

                }
            );
        case 'EDIT_TODO':
            return Object.assign({}, state, {
                editTodoFieldShow: true,
                curentTodo: changeCurentTodo(state, action)


                    // categories: state.categories.splice()
                    // ...state.categories,
                    // Object.assign({}, state.categories, [
                    //     state.categories[action.categId - 1].toDo.toDoName = 'new name'
                    // ])


                }
            );
        case 'TOGGLE_CHECKED_ITEM':
            return Object.assign({}, state, {
                categories: toggleChekedItem(state.categories, state, action)
                }
            );
        case 'TOGGLE_SHOW_COMPLITED_TODO':
            return Object.assign({}, state, {
                showEndedTodo: !state.showEndedTodo
                }
            );


        default:
            return state;
    }
};
