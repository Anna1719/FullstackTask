import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: "2.1rem",
              textTransform: "none",
              px: 3,
            }}
          >
            All Dogs
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/favorites"
            sx={{
              fontSize: "2.1rem",
              textTransform: "none",
              px: 3,
            }}
          >
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
