import ItemDiv from '../publicStyleComponents/styles/item';
import React from 'react';
import { connect } from 'react-redux';
import editTodo from '../../actions/editTodo';
import hideFieldCreateTodo from '../../actions/hideFieldCreateTodo';
import toggleCheckedItem from '../../actions/toggleChekedItem';

class Item extends React.Component{

    changeTodo() {

        store.dispatch(
            hideFieldCreateTodo()
        );
        store.dispatch(
            editTodo(this.props.categId, this.props.id)
        )
    }

    checkedItem() {

        store.dispatch(
            toggleCheckedItem(this.props.categId, this.props.id)
        )
    }

    render() {

        return (
            <ItemDiv>
                <input type="checkbox"
                       checked={this.props.defaultChecked}
                       onChange={this.checkedItem.bind(this)} />
                <p>{this.props.name}</p>
                <button onClick={this.changeTodo.bind(this)}/>
            </ItemDiv>
        )
    }
}

function mapStateToProps (state) {

    return {
        allState: state
    }
}

export default connect(mapStateToProps)(Item);
