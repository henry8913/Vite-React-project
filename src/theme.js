
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7D3C98', // Viola intenso
      light: '#9B59B6',
      dark: '#5B2C6F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E67E22', // Arancione caldo
      light: '#F39C12',
      dark: '#D35400',
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 22px',
          fontWeight: 600,
        },
        containedPrimary: {
          boxShadow: '0 4px 10px rgba(125, 60, 152, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 15px rgba(125, 60, 152, 0.4)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 10px rgba(230, 126, 34, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 15px rgba(230, 126, 34, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          borderRadius: 12,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '24px 0',
        },
      },
    },
    MuiAppBar: {
          styleOverrides: {
            root: {
              borderRadius: 0, // Imposta il borderRadius a 0 per rimuovere gli angoli arrotondati
            },
          },
        },
      },
    });

export default theme;
