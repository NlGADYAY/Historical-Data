import styled from "styled-components";

export const Main = styled.div`
  margin-inline: 220px;
  height: 1000px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-inline: 1px solid #ccc;
`;

export const MainContainer = styled.div`
  height: 800px;  
  width: 100%;
  z-index: 1;
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 16px;
  z-index: 1;
`;

export const PeriodsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 16px;
`;

