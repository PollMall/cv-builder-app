import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
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

  cvPreview: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    // to be deleted after cv preview implemented
  },

  stats: {
    width: '100%',
    paddingBottom: theme.spacing(1),
  },

  statsText: {
    // fontSize: 20,
    // fontWeight: 700,
  },

  chart: {
    // border: '1px solid red',
    width: 80,
    height: 'auto',
  },
}));
