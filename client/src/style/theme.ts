import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", sans-serif',
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.1rem',
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.MuiIconButton-sizeLarge': {
            padding: 12,
            fontSize: '2rem'
          }
        }
      }
    }
  }
});

export default theme;