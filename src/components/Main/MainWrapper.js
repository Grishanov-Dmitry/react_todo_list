/**
 * Created by Dima on 19.01.2018.
 */

import React from 'react';
import MainWrapper from './styles/mainWrapper';
import { connect } from 'react-redux';
import Category from '../publicStyleComponents/Category';
import Button from './styles/button';
import FirstAddField from './FirstAddField';
import Item from '../publicStyleComponents/Item';
import { FieldCreateItem } from './FieldCreateItem';
import FieldEditItem from './FieldEditItem';
import ReactDOM from 'react-dom';
import addNewCategory from '../../actions/addNewCategory';
import {store} from "../../store";
import { InputAddInnerCateg } from './InputAddInnerCateg';
import { InputChangeCategoryName } from './InputEditCategoryName';
import category from "../publicStyleComponents/styles/category";



class Main extends React.Component{

    checkParent(item){

        if(item.parentId === undefined) {
            return '99';
        } else {
            return '99';
        }
    }

    drawAllCategory() {

        return (
            this.props.allState.categories.map((item) => {

                //Show input Category and addNewCategoryInput
                    if(this.props.allState.addNewCategoryInputShow &&
                        item.id === this.props.allState.selectCategoryId) {
                        return (
                            <div>
                                <Category
                                    key={item.id}
                                    id={item.id}
                                    categoryName={item.categoryName}
                                    color="true" />
                                <InputAddInnerCateg/>
                            </div>
                        )
                    //Show input Category and changeCategoryNameInput
                    } else if(this.props.allState.changeCategoryNameInputShow &&
                        item.id === this.props.allState.selectCategoryId){
                        return (
                            <div>
                                <Category
                                    key={item.id}
                                    id={item.id}
                                    categoryName={item.categoryName} />
                                <InputChangeCategoryName defaultValue={this.props.allState.selectCategoryValue} />
                            </div>
                        )
                    } else if(this.props.allState.selectCategoryId === item.id) {

                        return (
                            <Category
                                key={item.id}
                                id={item.id}
                                categoryName={item.categoryName}
                                color="true"
                                width={this.checkParent(item)}/>
                        )
                    }  else if(item.parentId === false) {

                        return (
                            <Category
                                key={item.id}
                                id={item.id}
                                categoryName={item.categoryName}
                                width={this.checkParent(item)}/>
                        )
                    }
                    else if (this.props.allState.categories[item.parentId].subCategoryVisible) {
                        return (
                            <Category
                                key={item.id}
                                id={item.id}
                                categoryName={item.categoryName}
                                width={this.checkParent(item)} />
                        )
                    }
                }

            )
        )
    }

    checkCategoryValue() {
        if(this.textField.value.length) {
            this.addNewCategory();
        }
    }

    addNewCategory() {

        store.dispatch(
            addNewCategory(this.textField.value)
        );

        this.textField.value = '';
    }

    checkShowEndedTodo(todo, i, item) {

        if(this.props.allState.showEndedTodo || todo.checked === false) {
            return (
                <Item name={todo.toDoName}
                      key={i}
                      categId={item.id}
                      id={i}
                      defaultChecked={todo.checked}/>
            )
        }
    }

    drawAllItem() {
        return(
            this.props.allState.categories.map((item, i) => {

                {
                    if(item.id === this.props.allState.selectCategoryId && item.toDo.length) {
                    return item.toDo.map((todo, i) => (
                       this.checkShowEndedTodo(todo, i, item)
                    ))
                    }
                }
            }

            )
        )
    }

    checkKeyDown(event) {

        if(event.keyCode === 13) {
            this.checkCategoryValue();
        }
    }

    render() {

        return (
            <MainWrapper className="mainField">

                <div className="mainField__work-window-1">

                    <div className="add_new_category hideElem"
                        id="add_naw_category" >

                        <input id="input__add_new_category"
                               type="text"
                               placeholder="Inter a category name"
                               value={store.value}
                               ref={(input) => { this.textField = input; }}/>
                        <button id="add__new_category"
                                onClick={this.checkCategoryValue.bind(this)}
                                onKeyDown={this.checkKeyDown.bind(this)}
                                tabIndex="13"/>
                    </div>

                    <div className="field_for_add_category__wrapper">

                        <div className="field_for_add_category hideElem" id="fieldForAddCategory">
                            <p className="title">Your categories for todo</p>
                            { this.drawAllCategory() }
                        </div>

                    </div>

                </div>

                <div className="mainField__work-window-2">

                    <FirstAddField className="FirstAddField" id="first_add_field"/>

                    <div className="field_for_items displayNone" id="field_for_items">
                        <p className="title">Your toDo in category</p>
                        { this.drawAllItem() }
                    </div>
                </div>


                <div className="mainField__work-window-3" >
                    {this.props.allState.createTodoFieldShow ? (<FieldCreateItem/>) : null}
                    {this.props.allState.editTodoFieldShow ? (<FieldEditItem/>) : null}
                </div>

            </MainWrapper>
            )
    }
}

function mapStateToProps(state) {
    return {
        allState: state
    }
}

export default connect(mapStateToProps)(Main);
