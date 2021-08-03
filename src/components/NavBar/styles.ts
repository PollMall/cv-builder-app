import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: theme.spacing(8),
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: 'rgba(255, 142, 83, 0.55)',
  },

  logo: {
    width: 64,
    height: 64,
  },

  dropdown: {
    width: 150,
    backgroundColor: '#764ba2',
  },

  dropdownItem: {
    textAlign: 'center',
  },

  loading: {
    display: 'block',
    margin: '0 auto',
  },
}));
