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

  overflowContent: {
    overflow: 'auto',
  },

  ratingSection: {
    marginBottom: theme.spacing(1),
  },

  ratingText: {
    marginRight: theme.spacing(2),
  },

  slider: {
    flexBasis: '35%',
  },

  institutionName: {
    fontWeight: 700,
  },

  locationName: {},

  title: {
    fontStyle: 'italic',
  },

  deleteBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  presentCheckbox: {
    alignSelf: 'flex-start',
    padding: 0,
    margin: 0,
  },

  addBtn: {
    margin: `${theme.spacing(2)}px 0`,
  },

  cardsContainer: {
    width: 300,
    height: 350,
    overflow: 'auto',
  },

  roundedCard: {
    boxSizing: 'border-box',
    position: 'relative',
    width: '95%',
    height: 'fit-content',
    margin: '0 auto',
    marginBottom: `${theme.spacing(1)}px`,
    padding: `${theme.spacing(2)}px`,
    backgroundColor: '#596dc9',
    borderRadius: 10,
    '&:first-child': {
      marginTop: `${theme.spacing(1)}px`,
    },
  },
}));
