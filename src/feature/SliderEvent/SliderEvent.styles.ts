import styled from "styled-components";

export const SliderConteiner = styled("div")({
  "@media (max-width: 320px)": {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
});

export const SliderNavigate = styled("div")({
  "@media (max-width: 320px)": {
    order: 1,
    width: '50px',
    height: '59px',
    marginLeft: '60px'
  },
});

export const SliderCounter = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "16px",
  fontSize: "16px",

  "@media (max-width: 320px)" : {

  }
});

export const Selector = styled("select")({
  fontSize: "16px",
  background: "transparent",
  border: "none",
  color: "#42567a",
  cursor: "pointer",
  fontWeight: "bold",

  "@media (max-width: 320px)": {
    fontFamily: "'PT Sans'",
    fontWeight: "regular",
    color: "#42567A",
    fontSize: "14px",
  },
});
export const NavButton = styled("button")({
  width: "40px",
  height: "40px",
  background: "none",
  border: "1px solid #42567A",
  fontSize: "20px",
  color: "#42567A",
  cursor: "pointer",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s",

  "&:disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },

  "&:hover:not(:disabled)": {
    backgroundColor: "#F9FAFB",
  },
  "@media (max-width: 320px)": {
    width: "25px",
    height: "25px",
    borderRadius: "50%",

  },
});

export const Counter = styled("span")({
  fontSize: "18x",
  color: "#42567A",
  fontFamily: "'PT Sans'",
});
