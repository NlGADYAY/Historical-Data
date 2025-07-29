import styled from "styled-components";

export const SliderCounter = styled('div') ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
  fontSize: '16px',

})

export const Selector = styled('select')({
  fontSize: '16px',
  background: 'transparent',
  border: 'none',
  color: '#42567a',
  cursor: 'pointer',
  fontWeight: 'bold',


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
});

export const Counter = styled('span') ({
  fontSize: '18x',
  color: '#42567A',
  fontFamily: "'PT Sans'",
})