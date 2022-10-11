import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    card: {
      width: 150,
      height: 'auto',
    },

    cardButton: {
      padding: 0,
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    gridText: {
      textAlign: 'center',
    },

    btn: {
      fontWeight: 700,
    },

    stats: {
      width: '100%',
      paddingBottom: theme.spacing(1),
    },

    statsText: {},

    chart: {
      width: 80,
      height: 'auto',
    },
  }),
  { index: 1 },
);
