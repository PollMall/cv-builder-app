import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    card: {
      width: 400,
      backgroundColor: 'red',
      borderRadius: 10,
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(5),
      minHeight: 300,
      paddingTop: theme.spacing(9),
    },

    tabFocus: {
      backgroundColor: '#cbd2f1',
    },

    tab: {
      backgroundColor: '#99a8e8',
    },

    tabIndicator: {
      visibility: 'hidden',
    },

    tabContainer: {
      border: '1px solid #fff',
      borderRadius: '10px 10px 0px 0px',
    },

    content: {
      backgroundColor: '#6476c9',
      height: 'inherit',
      borderRadius: '0 0 10px 10px',
    },

    button: {
      marginTop: 'auto',
    },
  }),
  { index: 1 },
);
