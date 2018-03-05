import styled from 'styled-components';

export default styled.div`
  //display: none;
  width: 75%;
  height: 70%;
  
  margin: 0 0 0 20px;
  
  padding-top: 95px;
  
  .field_edit_item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid silver;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.6);
    
    p {
       font-size: 27px;
       font-weight: 600;
     }
    
    button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
    }
    
    input {
      font-size: 20px;
      text-indent: 15px;
    }
    
    textarea {
      width: 80%;
      height: 30%;
      margin-top: 30px;
      margin-bottom: 30px;
      border-radius: 5px;
      font-size: 20px;
      text-indent: 15px;
      padding: 10px;
    }
    
    label {
      width: 70px;
      height: 30px;
    }
    
    .item_name__field_edition_item {
      width: 200px;
      height: 30px;
      border: 1px solid silver;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.6);
    }
    
    div {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
  }  


`;
