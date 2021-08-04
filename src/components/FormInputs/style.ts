import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },

  input: {
    backgroundColor: 'rgba(243, 197, 172, 0.3)',
  },

  submit: {
    padding: `${theme.spacing(1)}px ${theme.spacing(5)}px`,
    border: '1px solid #fff',
    borderRadius: 10,
  },

  secondaryBtn: {
    padding: `${theme.spacing(1)}px ${theme.spacing(5)}px`,
    border: '1px solid #ff8e53',
    borderRadius: 10,
  },
}));
