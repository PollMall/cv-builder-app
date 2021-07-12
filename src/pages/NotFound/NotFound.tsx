import React from 'react';
import { useHistory } from 'react-router';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LadingPage = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      minHeight="100vh"
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h6">Oops! It looks like you are lost.</Typography>
      <Button startIcon={<ArrowBackIcon />} onClick={() => push('/')}>
        Go back
      </Button>
    </Box>
  );
};

export default LadingPage;
