import { AppBar, Toolbar, Typography } from "@mui/material";
export const Header = () => {
  return (
    <div>
      <AppBar position="sticky" sx={{ marginBottom: "10px" }}>
        <Toolbar>
          <Typography variant="h6">Houm</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
