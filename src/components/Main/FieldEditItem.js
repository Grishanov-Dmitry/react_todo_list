import React from 'react';
import FieldEditItemDiv from './styles/fielsEditItem';
import { connect } from 'react-redux';
import saveItemChanges from '../../actions/saveItemChanges';

let divStyle = {
    background: 'red'
};


class FieldEditItem extends React.Component{
    resetNewItemValue() {
        this.textField.value = '';
        this.textField.style={divStyle};
        this.newItemDiscrip.value = '';
    }

    checkToDoValue() {
        if(this.textField.value.length) {
            this.saveChanges();
        }
    }

    saveChanges() {
        store.dispatch(
            saveItemChanges(this.textField.value, this.newItemDiscrip.value)
        );
        this.resetNewItemValue();
    }

    render() {
        return (
            <FieldEditItemDiv>
                <div className="field_edit_item">
                    <div>
                        <p>Please, change an item</p>
                    </div>

                    <div>
                        <input className="item_name__field_edition_item"
                               placeholder="Inter an item name"
                               ref={(input) => { this.textField = input; }}
                               defaultValue={this.props.allState.curentTodo.itemName}/>
                    </div>

                    <textarea placeholder="Please, inter discription of toDo"
                              ref={(input) => { this.newItemDiscrip = input; }}
                              defaultValue={this.props.allState.curentTodo.itemDiscription}/>

                    <div>
                        <button onClick={this.checkToDoValue.bind(this)} >Save changes</button>
                        <button onClick={this.resetNewItemValue.bind(this)}>Cancel</button>
                    </div>
                </div>
            </FieldEditItemDiv>

        )
    }
}

function mapStateToProps(state) {
    return {
        allState: state
    }
}

export default connect(mapStateToProps)(FieldEditItem);
