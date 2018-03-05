/**
 * Created by Dima on 19.01.2018.
 */

import styled from 'styled-components';

export default styled.div`
    border-bottom: 3px solid silver;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1 {
      width: 600px;
      margin-left: 70px;
      align-content: center;
      font-size: 30px;
      font-family: "Arial Narrow";
      font-weight: 500;
    }
   
    input[type=search] { 
      width: 200px;
      height: 30px;
      border: 2px solid silver;
      border-radius: 10px;
      font-size: 20px;
      text-indent: 10px;
    }
    
    .hideBlock {
    display: none;
    }
   
`;
