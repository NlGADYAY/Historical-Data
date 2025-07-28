import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin:20px;  
`;

export const ScrollContainer = styled.div`
  display: flex;
  width: 1300px;
  margin-inline: 50px;
  gap: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemsRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
  height: 135px;

`;

export const ScrollButton = styled.button`
  position: absolute;
  background: red;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 1);
  color: blue;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`;

export const ScrollButtonLeft = styled(ScrollButton)`
  left: 0;
`;

export const ScrollButtonRight = styled(ScrollButton)`
  right: 0;
`;
