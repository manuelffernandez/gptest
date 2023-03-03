import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '-apple-system',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
