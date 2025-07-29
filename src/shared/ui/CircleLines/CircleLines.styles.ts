import { styled } from "styled-components";

export const CircleContainer = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
});

export const Circle = styled("div")({
  width: "530px",
  height: "530px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transformOrigin: "center center",
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundColor: "#ccc",
    width: "1px",
    height: "1080px",
    top: "-280px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    backgroundColor: "#ccc",
    height: "1px",
    width: "1440px",
    top: "50%",
    left: "-455px",
    transform: "translateY(-50%)",
  },

  "@media (max-width: 320px)": {
    display: 'none',
    "&::after": {
      content: '""',
      position: "absolute",
      backgroundColor: "#ccc",
      width: "280px",
      top: '50%',
      transform: "translateY(-50%)",
    },
    ' &::before': {
    display: 'none'
  }
  },
});

export const Dot = styled("div")({
  position: "absolute",
  width: "8px",
  height: "8px",
  backgroundColor: "#42567a",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  cursor: "pointer",
  zIndex: 1,
});

export const DotWrapper = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "530px",
  height: "530px",
  transformOrigin: "center center",
});
