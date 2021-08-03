import React from 'react';
import { Typography } from '@material-ui/core';
import Page from '../../components/Page/Page';
import AuthTabs from './AuthTabs';

const AuthPage = () => {
  return (
    <Page justifyContent="center">
      <Typography variant="h6">But first you have to be logged in</Typography>
      <AuthTabs />
    </Page>
  );
};

export default AuthPage;
