import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        color: 'white',
      },

      containedSecondary: {
        backgroundColor: '#fff',
        color: '#ff8e53',

        '&:hover': {
          backgroundColor: '#fff',
        },
      },

      textPrimary: {
        color: '#ff8e53',
      },
    },

    MuiMenu: {
      paper: {
        backgroundColor: '#f3c5ac4d',
      },
    },

    MuiChip: {
      root: {
        color: '#fff',
      },
      outlined: {
        borderColor: '#ff8e53',
      },
      deleteIcon: {
        color: '#ff8e53',
      },
    },

    MuiCard: {
      root: {
        backgroundColor: '#6476c9',
        height: 'inherit',
        borderRadius: '0 0 10px 10px',
      },
    },

    MuiTypography: {
      root: {
        color: 'white',
      },
    },

    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#ff8e53',
      },
    },
  },
  typography: {
    fontFamily: ['Sen', 'sans-serif', 'Arial'].join(','),
    allVariants: {
      color: '#fff',
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },

    secondary: {
      main: '#ff8e53',
    },

    error: {
      main: '#ff8e53',
    },

    // background: {
    //   default: 'linear-gradient(#667eea, #764ba2)',
    // },

    text: {
      primary: '#fff',
    },
  },
});
