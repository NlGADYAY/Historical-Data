import { styled } from "styled-components";

export const PeriodBefore = styled('span')({
  marginRight: '20px', 
  fontSize: '200px',
  color: '#5D5FEF',
  fontFamily: "'PT Sans'",
  fontWeight: 'bold',
    "@media (max-width: 320px)" : {
    fontSize: "56px"
  }
});

export const PeriodAfter = styled('span')({
  marginLeft: '20px',
  paddingLeft: '50px',
  fontSize: '200px',
  fontFamily: "'PT Sans'",
  fontWeight: 'bold',
  color: '#EF5DA8',
    "@media (max-width: 320px)" : {
    fontSize: "56px"
  }
});
