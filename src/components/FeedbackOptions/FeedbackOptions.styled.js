import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  font-size: 30px;
`;

export const ButtonFeedback = styled.button`
  width: 100px;
  font-size: 25px;
  margin-right: 15px;
  text-transform: capitalize;
  border-radius: 5px;
  border: 0px solid lightgray;
  box-shadow: 0px 0px 1px 2px #cecdcd75;
  cursor: pointer;
  padding: 5px 5px;

  :hover {
    background-color: #1f75fe;
    transform: scale(1.1);
  }
`;
