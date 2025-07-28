import { styled } from "styled-components";

export const CircleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Circle = styled.div`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #ccc;
  }

  /* Вертикальная линия */
  &::before {
    width: 1px;
    height: 2000px;
    top: -1000px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Горизонтальная линия */
  &::after {
    height: 1px;
    width: 2000px;
    top: 50%;
    left: -1000px;
    transform: translateY(-50%);
  }
`;

export const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #42567a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
