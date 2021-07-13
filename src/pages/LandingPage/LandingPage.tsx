import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import useStyles from './styles';

const LadingPage = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.root}
      minHeight="100vh"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Welcome</Typography>
        <Typography variant="h6">Are you ready to nail your next job application?</Typography>
      </Box>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
};

export default LadingPage;
