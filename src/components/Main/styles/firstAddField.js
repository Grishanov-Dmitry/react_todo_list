import styled from 'styled-components';

const hideBlock = {
    display: 'none'
};

export default styled.div`
  width: 60%;
  height: 300px;
  border: 3px solid #fff;
  border-radius: 10%;
  margin-right: 10%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(198, 186, 170, 0.9);
  
  
  h2 {
  font-size: 30px;
  }
  
  p {
  font-size: 25px;
  
  }
  
  button {
  width: 100px;
  height: 50px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  }
  
  .hideElem {
  display: none;
}

`;
