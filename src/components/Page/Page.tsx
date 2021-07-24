import React, { ReactNode, useContext } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import useStyles from './styles';
import NavBar from '../NavBar/NavBar';
import { AuthContext } from '../../context/AuthContext';

interface PageProps extends BoxProps {
  children: ReactNode;
}

const Page = ({ children, ...rest }: PageProps) => {
  const classes = useStyles();
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <>
      {user && <NavBar />}
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        {...rest}
      >
        {children}
      </Box>
    </>
  );
};

export default Page;
