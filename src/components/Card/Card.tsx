import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@material-ui/core';

const Card = (props: MuiCardProps) => {
  return <MuiCard raised {...props} />;
};

export default Card;
