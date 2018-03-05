/**
 * Created by Dima on 19.01.2018.
 */

import styled from 'styled-components';
import icons from "../../../../public/images/icons.png";

export default styled.div`

    width: 100%;
    //height: 90vh;
    height: 539px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
      span{
      width: 25px;
      height: 25px;
      background: url(${icons});
      border: 2px solid silver;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 5px;
      margin-left: 5px;
      }
      
      button {
      width: 27px;
      height: 27px;
      }
      
      .add_new_category {
        margin-top: 30px;
      }
      
      .add_new_item {
        margin-top: 15px;
        margin-left: 45px;
      }
      
      .add_new_category,
      .add_new_item {
      background: rgba(255, 255, 255, 0.6);
      width: 250px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      
      input {
       width: 200px;
      height: 25px;
      font-size: 18px;
      border-radius: 5px;
      margin-left: 5px;
      text-indent: 10px;
      }
      
      button {
      width: 30px;
      height: 30px;
      background: url(${icons});
      background-position: 181px -11px;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 5px;
      margin-left: 5px;
      }
     
    }
    
    .mainField__work-window-1,
    .mainField__work-window-2,
    .mainField__work-window-3 {
    width: 33.333%;
    height: 100%;
    display: flex;
    }
    
    .mainField__work-window-1 {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        
        
        .field_for_add_category__wrapper {
          width: 100%;
          height: 90%;
          display: flex;
          justify-content: center;
          margin-top: 22px;
      }
    }
    
    .field_for_add_category {
      width: 400px;
      height: 425px;
      overflow-y: auto;
      border: 2px solid silver;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.4);
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: column;
      
    }

    .mainField__work-window-2 {
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        
        

    }

    .field_for_items {
          width: 400px;
          height: 425px;  
          border: 2px solid silver;
          margin-top: 90px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.4);
          //display: none;
         
        }
        
    .title {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        padding: 10px 0 10px 0;
        text-decoration: underline;
        margin: 0 auto 0;
      }
      
     .hideElem {
          visibility: hidden;
        }
     .displayNone {
        display: none;
     }
`;
 
