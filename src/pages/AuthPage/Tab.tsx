import React from 'react';
import { Tab as TabMui, TabProps as TabMuiProps, Typography } from '@material-ui/core';
import useStyles from './styles';

interface TabProps extends TabMuiProps {
  idx: number;
  value: number;
}

const Tab = ({ idx, value, label, ...rest }: TabProps) => {
  const classes = useStyles();

  return (
    <TabMui
      value={idx}
      label={<Typography variant="h6">{label}</Typography>}
      className={idx === value ? classes.tabFocus : classes.tab}
      {...rest}
    />
  );
};

export default Tab;
