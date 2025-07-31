import styled from "styled-components";

export const Dot = styled("button")<{
  isActive?: boolean;
  angleDeg?: number;
}>(({ isActive, angleDeg = 0 }) => ({
  position: "absolute",
  width: isActive ? "56px" : "8px",
  height: isActive ? "56px" : "8px",
  backgroundColor: isActive ? "#e9e8e892" : "#ccc",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  cursor: "pointer",
  zIndex: 1,
  border: isActive ? "1px solid #42567A" : "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",

  "& .dot-label": {
    color: "#42567A",
    fontSize: "20px",
    fontWeight: "bold",
    transform: `rotate(${angleDeg}deg)`,
    pointerEvents: "none",
  },

  "@media (max-width: 320px)": {
    position: "static",
    transform: "none",
    backgroundColor: isActive ? "#3c4d6eff" : "#ccc",
    margin: "0 4px",
    width: isActive ? "10px" : "8px",
    height: isActive ? "10px" : "8px",

    "& .dot-label": {
      transform: "none",
      fontSize: "0",
    },
  },
}));



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
