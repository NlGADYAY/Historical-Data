import { styled } from "styled-components";

export const Main = styled("div")({
  marginInline: "auto",
  height: "100vh",
  maxWidth: "1440px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  borderInline: "1px solid #ccc",
  paddingInline: "20px",

  "@media (max-width: 320px)": {
    height: "570px",
    padding: 0,
    margin: 0,
  },
});

export const MainContainer = styled("div")({
  height: "700px",
  width: "100%",
  maxWidth: "1440px",
  marginLeft: '-42px',
  zIndex: 2,

  "@media (max-width: 320px)": {
    width: "100%",
    height: "50%",
  },
});


export const PositionPeriod = styled('div') ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "8px 16px",
  zIndex: 2,


  "@media (max-width: 320px)": {
    position: "relative",
    padding: "8px 8px",
    marginLeft: '20px',
    width: "284px",
    height: "75px",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const FooterContainer = styled("div")({
  display: "flex",
  gap: "16px",
  height: "150px",
  "@media (max-width: 320px)": {
    height: "50%",
    flexDirection: "column",
    gap: "8px",
  },
});


