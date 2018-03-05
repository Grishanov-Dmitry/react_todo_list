import FirstAddFieldDiv from './styles/firstAddField';
import React from 'react';
import hideAddField from '../../actions/hideAddField';
import { connect } from 'react-redux';

const showAddNewCategory = () => {

    document.getElementById('add_naw_category').classList.remove('hideElem');
    document.getElementById('fieldForAddCategory').classList.remove('hideElem');
    document.getElementById('field_for_items').classList.remove('displayNone');
    document.getElementById('showDown').classList.remove('hideBlock');
    document.getElementById('serchInHeader').classList.remove('hideBlock');
    document.getElementsByClassName('sc-bZQynM')[0].style.display = "none";
};


class FirstAddField extends React.Component{

    addNewList() {
        return showAddNewCategory();
    }

render() {

    return(
        <FirstAddFieldDiv>
            <h2>Hello, {this.props.allState.userName}!</h2>
            <p>It's time to create</p>
            <p>a new todoList!</p>

            <button onClick={this.addNewList.bind(this)}>
                Add new List
            </button>
        </FirstAddFieldDiv>
        )
    }
}

function mapStateToProps(state) {
    return {
        allState: state
    }
}

export default connect(mapStateToProps)(FirstAddField);
