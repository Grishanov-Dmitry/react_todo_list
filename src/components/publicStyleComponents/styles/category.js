
import styled, { css } from 'styled-components';
import icons from "../../../../public/images/icons.png";

export default styled.div`
  background: ${props => props.color ? 'rgba(255, 223, 128, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
  width: ${props => props.width + '%'};
  height: 40px;
  border-radius: 10px;
  border: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
  
  div {
    display: flex;
    justify-content: flex-end;
  }
  
  .category__first_conteiner {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    
    p {
      margin-left: 10px;
      width: 85%;
    }
  }
  
  .category__second_conteiner {
    width: 40%;
  }
  
  button {
      width: 30px;
      height: 30px;
      background: url(${icons});
      border-radius: 5px;
      cursor: pointer;
      margin-right: 5px;
      margin-left: 5px;
  }
  
  .button__category_show_inner {
    background-position: -137px -12px;
  }
  
  .button__category_edit {
    background-position: -33px -13px;

  }
  
  .button__category_delete {
    background-position: -2px -12px;

  }
  
  .button__category_add_toDo {
    background-position: -70px -12px;

  }
  
  .button__category_add_category {
    background-position: -169px -12px;

  }
 
`;
