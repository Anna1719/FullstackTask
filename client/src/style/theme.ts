import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff5722',
      light: '#ff8a50',
      dark: '#c41c00',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", sans-serif',
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: '#d32f2f',
    },
    body1: {
      fontSize: '1.1rem',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#d32f2f',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(211, 47, 47, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(211, 47, 47, 0.15)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(211, 47, 47, 0.08)',
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
          },
          color: '#d32f2f'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#d32f2f',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#b71c1c',
            }
          }
        }
      }
    }
  }
});

export default theme;