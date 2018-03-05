import   SignUpButtonStyle  from './styles/SignUpButton';
import React from 'react';
import { connect } from 'react-redux';
import changeButton from '../../actions/mouseOnButton';
import returnButton from '../../actions/mouseLeftButton';
import changeUserName from '../../actions/changeUserName';
import changeSignUpButtonCondition from '../../actions/changeSignUpButtonCondition';

class SignUpButton extends React.Component{

    changeButton() {
        store.dispatch(
            changeButton()
        )
    }

    returnButton() {
        store.dispatch(
            returnButton()
        )
    }

    showGreeting() {
        store.dispatch(
            changeSignUpButtonCondition()
        )
    }

    changeUserName() {
        store.dispatch(
            changeUserName(document.getElementById('signUp').value),
        );

        store.dispatch(
            changeSignUpButtonCondition()
        );

    }

    render() {
        return (
            <SignUpButtonStyle onMouseOver={this.changeButton.bind(this)}
                               onMouseLeave={this.returnButton.bind(this)}
                               condition={this.props.allState.condition}>

                    <label htmlFor="signUp">{this.props.allState.greeting}</label>
                    <input type="text" id="signUp" autoFocus={true}/>
                <button value='Inter' onClick={this.changeUserName}>Inter</button>
            </SignUpButtonStyle>
        )
    }
}

function mapStateToProps (state) {
    return {
        allState: state
    }
}

export default connect(mapStateToProps)(SignUpButton);
