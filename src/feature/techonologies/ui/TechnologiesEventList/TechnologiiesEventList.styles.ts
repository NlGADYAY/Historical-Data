import styled from "styled-components";

export const Wrapper = styled("div")({
  position: "relative",
  width: "1400px",
  marginBottom: '104px',

  "@media (max-width: 320px)": {
    width: "100%",
    marginBottom: "64px",
    paddingInline: "12px",
  },
});

export const ScrollContainer = styled("div")({
  display: "flex",
  width: "1200px",
  marginInline: "50px",
  gap: "20px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 320px)" : {
  display: "block",
  width: '280px'
    
  }
});

export const ItemsRow = styled("div")({
  display: "flex",
  gap: "50px",
  padding: "10px",
  height: "100%",
});

export const ScrollButton = styled("ScrollButtonBase");

export const ScrollButtonLeft = styled("button")({
  position: "absolute",
  background: "#FFFFFF",
  color: "blue",
  top: "50%",
  transform: "translateY(-50%)",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  zIndex: 10,
  left: 0,
});

export const ScrollButtonRight = styled("button")({
  position: "absolute",
  background: "rgba(255, 255, 255, 1)",
  color: "blue",
  top: "50%",
  transform: "translateY(-50%)",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  zIndex: 10,
  right: 0,
});
