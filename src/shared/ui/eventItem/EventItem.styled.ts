import { styled } from "styled-components";

export const EventItemConteiner = styled("div")({
  minWidth: "350px",

  "@media (max-width: 320px)": {
    minWidth: "auto",
  },
});

export const EventData = styled("div")({
  color: "blue",
  fontSize: "25px",
  fontFamily: "'Bebas Neue'",
  fontWeight: "400",

  "@media (max-width: 320px)": {
    color: "#3877EE",
    fontSize: "16px",
  },
});

export const EventDescription = styled("div")({
  fontSize: "20px",
  color: "#42567A",
  fontFamily: "'PT Sans'",
  fontWeight: "400",

  "@media (max-width: 320px)": {
    fontSize: "14px",
    width: '170px',
    height: '80px',

  },
});
