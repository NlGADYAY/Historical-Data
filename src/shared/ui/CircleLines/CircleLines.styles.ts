import { styled } from "styled-components";

export const CircleContainer = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 0,

});

export const Circle = styled("div")({
  width: "530px",
  height: "530px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  position: "relative",
  top: "50%",
  left: "50%",
  zIndex: 1,
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
    zIndex: 0,

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
    zIndex: 0,

  },
  "@media (max-width: 320px)": {
    width: "280px",
    height: "1px",
    border: "none",
    borderRadius: "0",
    backgroundColor: "#ccc",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    "&::after": {
      display: "none",
    },

    "&::before": {
      display: "none",
    },
  },
});


