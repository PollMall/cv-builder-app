import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Page from '../../components/Page/Page';
import CvCard from './CvCard';
import AddCvBtn from './AddCvBtn';

const DashboardPage = () => {
  return (
    <Page>
      <Box display="flex" justifyContent="space-around">
        <Grid container>
          <Grid item xs={4}>
            <AddCvBtn />
          </Grid>
          <Grid item xs={4}>
            <CvCard />
          </Grid>
          <Grid item xs={4}>
            <CvCard />
          </Grid>
          <Grid item xs={4}>
            <CvCard />
          </Grid>
          <Grid item xs={4}>
            <CvCard />
          </Grid>
        </Grid>
        <Grid container>orice</Grid>
      </Box>
    </Page>
  );
};

export default DashboardPage;
