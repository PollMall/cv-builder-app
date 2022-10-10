import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
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

  locationName: {},

  title: {
    fontStyle: 'italic',
  },

  description: {
    marginLeft: theme.spacing(1),
  },

  chart: {
    width: 70,
    height: 70,
    fill: '#fff',
  },

  template: {
    textTransform: 'capitalize',
    padding: theme.spacing(1),
  },

  checkBtn: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    padding: 0,
  },

  downloadBtn: {},

  deleteBtn: {
    color: theme.palette.error.light,
    borderColor: theme.palette.error.light,
  },

  basicInfoContainer: {
    width: 500,
    position: 'sticky',
    top: 128,
  },

  cvPreviewContainer: {
    position: 'fixed',
    right: 10,
    top: '50%',
    translate: 'yes',
    transform: 'translateY(-50%)',
    boxSizing: 'border-box',
    paddingLeft: 5,
    paddingRight: 5,
  },

  '@media (max-width: 1700px)': {
    basicInfoContainer: {
      position: 'static',
    },
  },

  '@media (max-width: 1000px)': {
    cvPreviewContainer: {
      position: 'static',
    },
  },
}));
