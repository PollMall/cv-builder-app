import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@material-ui/core';
import useStyles from './styles';

const Card = (props: MuiCardProps) => {
  const classes = useStyles();

  return <MuiCard raised className={classes.content} {...props} />;
};

export default Card;
