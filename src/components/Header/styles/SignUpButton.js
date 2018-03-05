/**
 * Created by Dima on 19.01.2018.
 */

import styled from 'styled-components';

export default styled.div`
    border: 1px solid silver;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    font-size: 20px;
    margin-right: 100px;
    transition: width 1s, display 2s, height 1s cubic-bezier(0, 0, 1, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #b4b4b4;
    
    label {
    margin-top: 15px;
    }
    
    input {
    visibility: hidden;
    width: 0;
    }
    
    button {
    display: none;
    }
    
    &:${(props) => {
    if(props.condition === 'initial') {
        return 'hover'
    }
    }}{
      width: 300px;
      height: 100px;
      
      input {
      transition: 1s;
      visibility: visible;
      width: 150px;
      height: 25px;
      border-radius: 5px;
      border: 1px solid silver;
      margin: auto;
      margin-top: 5px;
      font-size: 20px;
      text-indent: 10px;
      }
      
      button {
        display: block;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        cursor: pointer;
        }
    }
    
`;
