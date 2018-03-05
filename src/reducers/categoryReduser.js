/**
 * Created by Dima on 20.01.2018.
 */

import { defaultStore } from '../store';

const changeToDo = (item, action) => {
    return [
        ...item.toDo, {
            toDoName: action.newItemIname,
            toDoDiscription: action.newItemValue
        }
    ]
};

const cahangeCategories = (action, state) => {
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

const changeCategoryName = (state, action) => {
    return state.categories.map((item) => {
        if(item.id === state.selectCategoryId) {
            item.categoryName = action.newCategoryName;
        }
        return item
    })
};


export const categoryReduser = (state = defaultStore, action) => {

    switch (action.type) {

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
                        id: state.categories.length + 1,
                        toDo: []
                    }
                ]
            });

        case 'SELECT_CATEGORY':
            return Object.assign({}, state, {
                selectCategoryId: action.selectCategoryId
            });
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



        default:
            return state;
    }
};
