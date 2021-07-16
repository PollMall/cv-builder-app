import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
      },
    },

    MuiTypography: {
      root: {
        color: 'white',
      },
    },
  },
  typography: {
    fontFamily: ['Sen', 'sans-serif', 'Arial'].join(','),
  },
  palette: {
    background: {
      default: 'linear-gradient(#667eea, #764ba2)',
    },
  },
});
