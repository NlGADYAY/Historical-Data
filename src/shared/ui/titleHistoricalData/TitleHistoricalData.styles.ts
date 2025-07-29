import { styled } from "styled-components";

export const HistoricalData = styled("div")({
  position: "relative",
  paddingLeft: "100px",
  marginTop: "50px",
  width: "320px",
  fontFamily: "'PT Sans'",
  fontWeight: "bold",
  color: "#42567A",
  fontSize: "56px",
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    width: "5px",
    height: "100%",
    background: "linear-gradient(to bottom, #5D5FEF, #EF5DA8)",
  },

  "@media (max-width: 320px)": {
    fontFamily: "'PT Sans'",
    fontWeight: "bold",
    color: "#42567A",
    fontSize: "20px",
    " &::before": {
      display: "none",
    },
  },
});
