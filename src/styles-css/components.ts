import {
  AppBar,
  Button,
  ButtonProps,
  Card,
  Chip,
  CircularProgress,
  Paper,
  styled,
  Typography,
} from "@mui/material";

/*  CARD SECTION  */

export const CardHoum = styled(Card)({
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
export const ChipLaunch = styled(Chip)({
  fontFamily: "'Nunito', sans-serif",
  letterSpacing: "-0.015rem",
  fontWeight: "bold",
  fontSize: "0.75rem",
  color: "white",
});

export const TypographyRocket = styled(Typography)({
  fontSize: "0.75rem",
  lineHeight: "1em",
  alignSelf: "flex-end",
  marginTop: "10px",
  marginLeft: "10px",
  marginBottom: "10px",
});

export const CircularProgressHoum = styled(CircularProgress)({
  color: "#FF452B",
});

export const AppBarHoum = styled(AppBar)({
  marginBottom: "10px",
  color: "white",
});

export const TypographyMission = styled(Typography)({
  fontFamily: "'Nunito', sans-serif",
  letterSpacing: "-0.015rem",
  fontWeight: "700",
  fontSize: "2rem",
  color: "#212121",
  lineHeight: "1.3em",
});

export const TypographySubtitle = styled(Typography)({
  fontFamily: "'Nunito', sans-serif",
  fontSize: "1.25rem",
  lineHeight: "1.35em",
  letterSpacing: "-0.015em",
  fontWeight: "700",
});

export const TypographyFilter = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: "1.2",
  fontSize: "1.5rem",
  maxWidth: "50%",
  margin: "auto",
});

export const iconStyle = {
  fontSize: "3.5rem",
  cursor: "pointer",
};

export const TypographyFilterOption = styled(Typography)({
  fontWeight: "bold",
  lineHeight: "1.2",
  fontSize: "1.125rem",
  color: "#616161",
});

export const ButtonSuscribe = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#ff5000",
  "&:hover": {
    backgroundColor: "#FF452B",
  },
  borderRadius: "36px",
  fontFamily: "'Nunito', sans-serif",
}));

export const PaperHoum = styled(Paper)({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "calc(100% + 8px)",
  boxShadow:
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  maxWidth: "800px",
  borderRadius: "16px",
});

export const ButtonFilter = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "#263238",
  "&:hover": {
    backgroundColor: "#607D8B",
  },
  color: "white",
  borderRadius: "36px",
}));
