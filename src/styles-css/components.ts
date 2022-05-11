import { Card, Chip, styled, Typography } from "@mui/material";

export const CardHoum = styled(Card)({
  position: "relative",
  borderRadius: "12px",
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  flexGrow: "0",
  flexBasis: "50%",
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "20px",
  marginRight: "20px",
});
export const LaunchTypography = styled(Chip)({
  fontFamily: "'Nunito', sans-serif",
  letterSpacing: "-0.015rem",
  fontWeight: "bold",
  fontSize: "0.75rem",
  color: "white",
});

export const RocketTypography = styled(Typography)({
  fontSize: "0.75rem",
  lineHeight: "1em",
  alignSelf: "flex-end",
  marginTop: "10px",
  marginLeft: "10px",
  marginBottom: "10px",
});
