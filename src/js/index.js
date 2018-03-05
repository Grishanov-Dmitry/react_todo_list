import './../sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import  { createStore } from 'redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import { store } from '../store';
import { Header } from '../components/Header/HeaderWrapper';
import Main from '../components/Main/MainWrapper';
import { Provider, connect } from 'react-redux';
import Decoration from '../components/Header/styles/Decoration';




class App extends React.Component{
    render() {
        return (
            <div>
                <Decoration/>
                <Header>Header</Header>
                <Main>Main meny</Main>
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);










// const render = () => {
//     ReactDOM.render(
//         <AddUserToScreen
//         name={store.getState().userName}
//         newUserName={() =>
//             store.dispatch(
//                 addNewUser2('Dima')
//             )
//         }
//         />,
//         document.getElementById('root')
//     )
// };





// ReactDOM.render(
//     <SignUpButton />,
//     document.getElementById('root')
// );
