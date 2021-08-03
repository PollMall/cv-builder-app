import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import Page from '../../components/Page/Page';

const LoadingPage = () => {
  return (
    <Page>
      <CircularProgress />
      <Typography variant="h2">Loading...</Typography>
    </Page>
  );
};

export default LoadingPage;
