import React from 'react';
import FieldEditItemDiv from './styles/fielsEditItem';
import addNewItem from '../../actions/addNewItem';

export class FieldCreateItem extends React.Component{
    resetNewItemValue() {
        this.textField.value = '';
        this.newItemDiscrip.value = '';
    }

    addNewItem() {
        store.dispatch(
            addNewItem(this.textField.value, this.newItemDiscrip.value)
        );
        this.resetNewItemValue();
    }

    checkToDoValue() {
        if(this.textField.value.length) {
            this.addNewItem();
        }
    }



    render() {

        return (
            <FieldEditItemDiv>
                <div className="field_edit_item hide" id="field_edit_item">
                    <div>
                        <p>Please, add an item</p>
                    </div>

                    <div>
                        <input id="new_item_name"
                               className="item_name__field_edition_item"
                               placeholder="Inter an item name"
                               ref={(input) => { this.textField = input; }} />

                    </div>

                    <textarea id="new_item_discription"
                              placeholder="Please, inter discription of toDo"
                              ref={(input) => { this.newItemDiscrip = input; }}/>

                    <div>
                        <button onClick={this.checkToDoValue.bind(this)} >Save changes</button>
                        <button onClick={this.resetNewItemValue.bind(this)}>Cancel</button>
                    </div>
                </div>
            </FieldEditItemDiv>

        )
    }
}

