import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  form: {
    boxSizing: 'border-box',
    width: 550,
    height: 380,
    padding: `${theme.spacing(5)}px ${theme.spacing(8)}px`,
  },

  overflowContent: {
    overflow: 'auto',
  },

  progressBar: {
    height: theme.spacing(1),
  },
}));
