import React from 'react';
import { useHistory } from 'react-router';
import { Typography, Button } from '@material-ui/core';
import Page from '../../components/Page/Page';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LadingPage = () => {
  const { goBack } = useHistory();

  return (
    <Page display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography variant="h2">404</Typography>
      <Typography variant="h6">Oops! It looks like you are lost.</Typography>
      <Button startIcon={<ArrowBackIcon />} onClick={() => goBack()}>
        Go back
      </Button>
    </Page>
  );
};

export default LadingPage;
