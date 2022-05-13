import { Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBarHoum } from "../styles-css/components";
export const Header = () => {
  return (
    <div>
      <AppBarHoum
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          marginBottom: "10px",
        }}
      >
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
