import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBarHoum } from "../styles-css/components";
export const Header = () => {
  return (
    <div>
      <AppBarHoum position="sticky">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Link to="/">
            <img
              src="/images/HoumLogo.svg"
              alt="Houm Logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Toolbar>
      </AppBarHoum>
    </div>
  );
};
