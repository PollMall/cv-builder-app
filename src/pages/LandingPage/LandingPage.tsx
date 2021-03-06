import React, { useContext } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Page from '../../components/Page/Page';
import { AuthContext } from '../../context/AuthContext';

const LadingPage = () => {
  const { push } = useHistory();
  const { state } = useContext(AuthContext);

  return (
    <Page display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Welcome{state.user && `, ${state.user?.displayName?.split(' ')[0]}`}</Typography>
        <Typography variant="h6">Are you ready to nail your next job application?</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={() => push('/dashboard')}>
        Get Started
      </Button>
    </Page>
  );
};

export default LadingPage;
