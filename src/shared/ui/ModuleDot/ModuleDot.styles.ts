import styled from "styled-components";

export const Dot = styled('button')<{ isActive?: boolean }>(({ isActive }) => ({
    position: "absolute",
    width: isActive ? "56px" : "8px",
    height: isActive ? "56px" : "8px",
    backgroundColor: isActive ? "#e9e8e892" : "#ccc",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    zIndex: 1,
    color: "#42567A",
    fontSize: isActive ? "20px" : "0",
    fontWeight: "bold",
    border: isActive ? "1px solid #42567A" : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",


    "@media (max-width: 320px)": {
        position: "static",
        transform: "none",
        margin: "0 4px",
        width: isActive ? "22px" : "8px",
        height: isActive ? "22px" : "8px",
        fontSize: isActive ? "14px" : "0",
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
    pointerEvents: 'none',
    zIndex: 10,

    ' & > *': {
        pointerEvents: 'auto',
    },

    "@media (max-width: 320px)": {
        position: "static",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "530px",
        marginInline: '170px'
    },
});

