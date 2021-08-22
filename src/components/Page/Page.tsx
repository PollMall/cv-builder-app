import React, { ReactNode, useContext } from 'react';
import { Box, BoxProps } from '@material-ui/core';
import useStyles from './styles';
import NavBar from '../NavBar/NavBar';
import { AuthContext } from '../../context/AuthContext';
import Error from './Error';
import Loading from './Loading';
import { ApolloError } from '@apollo/client';

interface PageProps extends BoxProps {
  children: ReactNode;
  loading?: boolean;
  error?: Error | ApolloError;
}

const Page = ({ children, loading, error, ...rest }: PageProps) => {
  const classes = useStyles();
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <>
      {user && <NavBar />}
      <Box
        boxSizing="border-box"
        paddingTop={10}
        paddingBottom={5}
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        {...rest}
      >
        {loading ? <Loading /> : error ? <Error error={error} /> : children}
      </Box>
    </>
  );
};

Page.defaultProps = {
  loading: undefined,
  error: undefined,
};

export default Page;
