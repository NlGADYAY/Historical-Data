import styled from "styled-components";

export const DotWrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "530px",
  height: "530px",
  transform: "translate(-50%, -50%)",
  transformOrigin: "center center",
  pointerEvents: "none",
  zIndex: 10,

  " & > *": {
    pointerEvents: "auto",
  },

  "@media (max-width: 320px)": {
    position: "fixed",
    top: "80%",
    bottom: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    padding: "8px",
    zIndex: 100,
    
  },
});

export const Dot = styled("button")<{ isActive?: boolean, isHovered: boolean }>(({ isActive, isHovered }) => ({
  position: "absolute",
  width: isActive ? "56px" : "8px",
  height: isActive ? "56px" : "8px",
  backgroundColor: isActive ? "#e9e8e8c9" : "#ccc",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  cursor: "pointer",
  zIndex: 1,
  border: isActive ? "2px solid #42567A" : "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  color: "#42567A",
  fontSize: "16px",
  fontWeight: "bold",
  pointerEvents: "auto",

    ...(!isActive && isHovered && {
    width: "56px",
    height: "56px",
    backgroundColor: "#e9e8e8c9",
    border: "2px solid #42567A",
    color: "#42567A",
    fontSize: "16px",
    fontWeight: "bold",
  }),

  "@media (max-width: 320px)": {
    position: "static",
    transform: "none",
    backgroundColor: isActive ? "#3c4d6eff" : "#ccc",
    margin: "0 4px",
    width: isActive ? "10px" : "8px",
    height: isActive ? "10px" : "8px",
    fontSize: "0",
    border: isActive ? "none" : "none",
  },
}));
