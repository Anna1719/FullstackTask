import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ 
        justifyContent: "center",
        backgroundColor: 'primary.dark'
      }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: "2.1rem",
              textTransform: "none",
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
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
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
