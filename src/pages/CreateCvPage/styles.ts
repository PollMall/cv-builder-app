import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    form: {
      boxSizing: 'border-box',
      padding: `${theme.spacing(5)}px ${theme.spacing(8)}px`,
      minWidth: 600,
    },

    overflowContent: {
      overflow: 'auto',
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

    institutionName: {
      fontWeight: 700,
    },

    locationName: {
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

    progressBar: {
      height: theme.spacing(1),
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
  }),
  { index: 1 },
);
