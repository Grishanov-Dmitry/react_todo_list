import React from 'react';
import Div from './styles/inputAddInnerCateg';
import addInnerCategoryAction from '../../actions/addSubCategory';
import hideAddCategInput from '../../actions/hideAddCategoryInput';
export class InputAddInnerCateg extends React.Component{

    addInnerComponent(){
        store.dispatch(
            hideAddCategInput()
        );
        store.dispatch(
            addInnerCategoryAction(this.inputText.value)
        )
    }

    checkInputValue() {
        if(this.inputText.value.length) {
            this.addInnerComponent()
        }
    }

    render() {
        return (
            <Div>
                <input type="text"
                       placeholder="A new category name"
                       ref={(input) => { this.inputText = input; }}/>
                <input value='Add'
                       type="button"
                       onClick={this.checkInputValue.bind(this)}
                        />
            </Div>
        )
    }
};
