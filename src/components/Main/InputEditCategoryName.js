import React from 'react';
import Div from './styles/inputAddInnerCateg';
import hideEditCategoryNameInputAction from '../../actions/hideEditCategoryNameAction';


export class InputChangeCategoryName extends React.Component{

    changeCategoryName(){
        store.dispatch(
            hideEditCategoryNameInputAction(this.inputText.value)
        );
    }

    checkInputValue() {
        if(this.inputText.value.length) {
            this.changeCategoryName()
        }
    }

    render() {
        return (
            <Div>
                <input type="text"
                       placeholder="A new category name"
                       ref={(input) => { this.inputText = input; } }
                       defaultValue={this.props.defaultValue}/>
                <input value='Add'
                       type="button"
                       onClick={this.checkInputValue.bind(this)}/>
            </Div>
        )
    }
};

