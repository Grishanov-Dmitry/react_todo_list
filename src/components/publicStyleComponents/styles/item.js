import styled from 'styled-components';
import icons from "../../../../public/images/icons.png";

export default styled.div`
  width: 350px;
  height: 50px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto 5px;
  
  
  p {
    width: 70%;
  }
  
  input[type='checkbox'] {
    transform: scale(1.4);
  }
  
  button {
    width: 30px;
    height: 30px;
    background: url(${icons});
    background-position: -33px -13px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
  }
`;
