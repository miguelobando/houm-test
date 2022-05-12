import { AppBar, Toolbar, Typography } from "@mui/material";
import { AppBarHoum } from "../styles-css/components";
export const Header = () => {
  return (
    <div>
      <AppBarHoum position="sticky">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <img src="/images/HoumLogo.svg" alt="" />
        </Toolbar>
      </AppBarHoum>
    </div>
  );
};
