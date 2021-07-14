import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" className={classes.root}>
      {children}
    </Box>
  );
};

export default Page;
