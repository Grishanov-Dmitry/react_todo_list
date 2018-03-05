
import React from 'react';
import CategoryDiv from './styles/category';
import { connect } from 'react-redux';
import selectCategoryAction from '../../actions/selectCategory';
import changeVisibility from '../../actions/showFieldCreateTodo';
import hideFieldEditTodo from '../../actions/hideFieldEditTodo';
import {store} from "../../store";
import showAddCategoryInput from '../../actions/showInputAddCateg';
import showEditCategoryNameInputAction from '../../actions/showEditCategoryNameInput';
import toggleVisibiliteSubCateg from '../../actions/toggleVisibilitySubCateg';



class Category extends React.Component{
    editCategoryName() {
        store.dispatch(
            showEditCategoryNameInputAction(this.props.categoryName, this.props.id)
        )
    }

    addNewTodo() {
            store.dispatch(
                changeVisibility()
            );
            store.dispatch(
                hideFieldEditTodo()
            )
    }

    selectCategory(e) {
        this.style={background: 'lightblue'};
        store.dispatch(
            selectCategoryAction(this.props.id)
        )
    }

    showAddCategInput() {

        store.dispatch(
            selectCategoryAction(this.props.id)
        );

        store.dispatch(
            showAddCategoryInput(this.props.id)
        )
    }

    toggleVisibilitySubCateg() {
        store.dispatch(
            selectCategoryAction(this.props.id)
        );
        store.dispatch(
            toggleVisibiliteSubCateg(this.props.id)
        )
    }

    render() {
        return (
            <CategoryDiv color={this.props.color}
                         width={this.props.width}>
                <div className="category__first_conteiner">
                    <button className="button__category_show_inner"
                            title="Show inner categories"
                            onClick={this.toggleVisibilitySubCateg.bind(this)}/>
                    <p onClick={this.selectCategory.bind(this)}>{this.props.categoryName}</p>

                </div>
                <div className="category__second_conteiner">
                    <button className="button__category_add_category"
                            title="Add a new inner category"
                            onClick={this.showAddCategInput.bind(this)}/>
                    <button className="button__category_edit"
                            title="Edit"
                            onClick={this.editCategoryName.bind(this)}/>
                    <button className="button__category_delete" title="Delete"/>
                    <button className="button__category_add_toDo"
                            title="Add a new toDo"
                            onClick={this.addNewTodo.bind(this)}/>
                </div>
            </CategoryDiv>
        )

    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Category);
