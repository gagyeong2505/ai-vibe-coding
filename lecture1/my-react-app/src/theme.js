import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A7C59',
      light: '#7DB56A',
      dark: '#3A6B42',
    },
    secondary: {
      main: '#6B8FBF',
    },
    error: {
      main: '#C1392B',
    },
    background: {
      default: '#F5F0E8',
      paper: '#EDE8DF',
    },
    text: {
      primary: '#1E2B3C',
      secondary: '#4A4A4A',
      disabled: '#6B6B6B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
