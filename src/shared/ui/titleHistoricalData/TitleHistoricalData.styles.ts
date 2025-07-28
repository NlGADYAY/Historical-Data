import styled from "styled-components";

export const HistoricalData = styled.div`
  position: relative;
  padding-left: 100px;
  margin-top: 50px;
  width: 320px;
  font-family: 'PT Sans';
  font-weight: bold;
  color: #42567A;
  font-size: 56px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #5D5FEF, #EF5DA8); // синий → розовый
  }
`;
