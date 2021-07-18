import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import useStyles from './styles';

interface PageProps extends BoxProps {
  children: ReactNode;
}

const Page = ({ children, ...rest }: PageProps) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className={classes.root}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Page;
