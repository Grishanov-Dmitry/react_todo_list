/**
 * Created by Dima on 19.01.2018.
 */

import React from 'react';
import HeaderWrapper from './styles/HeaderWrapper';
import SignUpButton from './SignUpButton';
import WrapperDiv from './styles/wrapperDiv';
import toggleShowCompitedTodo from '../../actions/toggleShowComplitedTodo';


export class Header extends React.Component{
    toggleEndedTodo() {
        store.dispatch(
            toggleShowCompitedTodo()
        )
    }

    render() {
        return (
        <HeaderWrapper className="header">
            <h1 className="slogan">Don't put for tomorrow what you can do today!</h1>
            <WrapperDiv>

                <label className="hideBlock" id="showDown">
                    <input type="checkbox" onChange={this.toggleEndedTodo.bind(this)}/>
                    Hide completed
                </label>

                <input className="hideBlock" id="serchInHeader" type="search" placeholder="Search"/>

                <SignUpButton/>
            </WrapperDiv>

        </HeaderWrapper>
        )
    }
}

