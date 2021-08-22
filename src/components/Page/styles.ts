import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(#667eea, #764ba2)',
  },

  loading: {
    width: 600,
    height: 25,
    borderRadius: theme.spacing(2),
  },
}));
