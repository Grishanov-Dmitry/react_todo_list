import category from "../components/publicStyleComponents/styles/category";
// import toggleChekedItem from "../actions/toggleChekedItem";
// import toggleVisibilitySubCateg from "../actions/toggleVisibilitySubCateg";

const changeToDo = (item, action) => {

    return [
        ...item.toDo, {
            toDoName: action.newItemIname,
            toDoDiscription: action.newItemValue,
            checked: false
        }
    ]
};

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

const changeCategoryName = (state, action) => {
    return state.categories.map((item) => {
        if(item.id === state.selectCategoryId) {
            item.categoryName = action.newCategoryName;
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

const addSubCategory = (categories, action, state) => {

    const index = categories.findIndex((item) => {
       return item.id === state.selectCategoryId
    });

    categories.splice(index + 1, 0 , {
        categoryName: action.inputValue,
        id: state.categories.length,
        toDo: [],
        subCategories: [],
        subCategoryVisible: true,
        parentId: state.parentIdTemp,
        width: categories[state.categories.length - 1].width
    } );

    return categories.map((item) => {

        if(item.id === state.selectCategoryId) {
            return Object.assign({}, item, {
                subCategories: [...item.subCategories, categories.length - 1],
                subCategoryVisible: true
            })
        }
        return item
    });


};

const toggleVisibilitySubCateg = (categories, state, action) => {

    categories.map((item) => {

        if(item.id === action.id) {
            const toggleVisibilite = (item) => {        //change name to findAllSubCateg

                let curent = categories.findIndex(index => index.id === item.id);

                let temp = Object.assign({}, categories[curent], {
                    subCategoryVisible: false
                });

                categories.splice(curent, 1, temp);


                if(item.subCategories.length) {
                    item.subCategories.map((item) => {
                        let curent = categories.findIndex(index => index.id === item);

                        toggleVisibilite(categories[curent]);  // Needs to find id === 3
                    })

                } else {
                    let temp = Object.assign({}, item, {
                        subCategoryVisible: false
                    });

                    let temp_2 = categories.findIndex(index => index.id === item.id);

                    return categories.splice(temp_2, 1, temp)
                }
            };

            const showSubCategory = (item) => {

                let temp = Object.assign({}, categories[item.id], {
                    subCategoryVisible: true
                });

                categories.splice(item.id, 1, temp);

                let tempCategory = categories[item.id].subCategories.map((innerItem) => {
                    let temp = Object.assign({}, categories[innerItem], {
                        subCategoryVisible: true
                    });

                    categories.splice(innerItem, 1, temp);
                    // newCategories.push(temp);
                })


            };

            if(item.subCategoryVisible) {
                toggleVisibilite(item);
            } else {
                showSubCategory(item);
            }



        }
    })

    return categories;
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

export const tempReduser = (state, action) => {

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

        case 'ADD_NEW_LIST':
            return Object.assign({}, state, {
                showAddField: action.showAddField
            });


        case 'ADD_NEW_CATEGORY':
            return Object.assign({}, state, {
                categories: [
                    ...state.categories,
                    {
                        categoryName: action.categoryName,
                        id: state.categories.length,
                        toDo: [],
                        subCategories: [],
                        subCategoryVisible: true,
                        width: '99',
                        parentId: false
                    }
                ],
                selectCategoryId: state.categories.length
            });
        case 'SELECT_CATEGORY':
            return Object.assign({}, state, {
                selectCategoryId: action.selectCategoryId
            });
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

        case 'ADD_SUB_CATEGORY':
            return Object.assign({}, state, {
                    selectCategoryId: state.categories.length,
                    categories: addSubCategory(state.categories, action, state)
                }
            );
        case 'TOGGLE_SUB_CATEG_VISIBILITY':
            return Object.assign({}, state, {
                    categories: toggleVisibilitySubCateg(state.categories, state, action)
                }
            );

        case 'SHOW_INPUT_ADD_CATEG':
            return Object.assign({}, state, {
                addNewCategoryInputShow: true,
                parentIdTemp: action.parentId
                }
            );
        case 'HIDE_ADD_CATEG_INPUT':
            return Object.assign({}, state, {
                addNewCategoryInputShow: false
                }
            );
        case 'SHOW_CHANGE_CATEGORY_NAME_INPUT':
            return Object.assign({}, state, {
                changeCategoryNameInputShow: true,
                selectCategoryValue: action.selectCategoryValue,
                selectCategoryId: action.selectCategoryId
                }
        );
        case 'HIDE_EDIT_CATEGORY_NAME_INPUT':
            return Object.assign({}, state, {
                changeCategoryNameInputShow: false,
                categories: changeCategoryName(state, action)
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
