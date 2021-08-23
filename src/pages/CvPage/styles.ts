import { makeStyles } from '@material-ui/core';

export default makeStyles(
  (theme) => ({
    root: {
      boxSizing: 'border-box',
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(10),
    },

    fieldNameContainer: {
      position: 'relative',
      width: 'fit-content',
    },

    icon: {
      position: 'absolute',
      right: -theme.spacing(2),

      '&:hover': {
        cursor: 'pointer',
      },
    },

    fieldName: {
      marginRight: theme.spacing(1),
      fontWeight: 700,

      '&:hover': {
        cursor: 'pointer',
      },
    },

    fieldInfo: {
      marginLeft: theme.spacing(3),
    },

    rating: {
      width: theme.spacing(16),
    },

    institutionName: {
      fontWeight: 700,
    },

    locationName: {
      fontStyle: 'italic',
    },

    description: {
      marginLeft: theme.spacing(1),
    },

    chart: {
      width: 70,
      height: 70,
    },

    template: {
      textTransform: 'capitalize',
      padding: theme.spacing(1),
    },

    preview: {
      height: 450,
      backgroundColor: '#fff',
    },

    checkBtn: {
      position: 'absolute',
      bottom: 47,
      right: 12,
      padding: 0,
    },

    downloadBtn: {
      alignSelf: 'center',
    },
  }),
  { index: 1 },
);
