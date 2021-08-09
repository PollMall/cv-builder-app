import { makeStyles } from '@material-ui/core';

interface StyleProps {
  descDate?: boolean;
  descScore?: boolean;
}

export default makeStyles((theme) => ({
  button: {
    borderRadius: 10,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    width: '80%',
  },

  row: {
    boxSizing: 'border-box',
    width: '100%',
  },

  icon: {
    width: 60,
    height: 'auto',
    marginRight: theme.spacing(2),
  },

  title: {
    textTransform: 'initial',
    fontWeight: 700,
  },

  text: {
    textTransform: 'initial',
  },

  score: {
    width: 70,
    height: 'auto',
  },

  dateSort: (props: StyleProps | undefined) => ({
    transform: `rotate(${props?.descDate ? 0 : '180deg'})`,
  }),

  scoreSort: (props: StyleProps | undefined) => ({
    transform: `rotate(${props?.descScore ? 0 : '180deg'})`,
  }),

  sortBtn: {
    textTransform: 'initial',
  },
}));
