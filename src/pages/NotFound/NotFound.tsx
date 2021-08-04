import React from 'react';
import { useHistory } from 'react-router';
import { Typography, Button } from '@material-ui/core';
import Page from '../../components/Page/Page';
import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LadingPage = () => {
  const classes = useStyles();
  const { goBack } = useHistory();

  return (
    <Page
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      minHeight="100vh"
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h6">Oops! It looks like you are lost.</Typography>
      <Button startIcon={<ArrowBackIcon />} onClick={() => goBack()}>
        Go back
      </Button>
    </Page>
  );
};

export default LadingPage;
