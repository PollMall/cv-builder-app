import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Page from '../../components/Page/Page';
import CvSvg from '../../images/CvSvg';
import AddCvSvg from '../../images/AddCvSvg';
import SvgButton from './SvgButton';

const DashboardPage = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <Box display="flex" justifyContent="space-around" width="90vw">
        <Grid container>
          <Grid item xs={4}>
            <SvgButton svg={AddCvSvg} />
          </Grid>
          <Grid item xs={4}>
            <SvgButton svg={CvSvg} />
          </Grid>
          <Grid item xs={4}>
            <SvgButton svg={CvSvg} />
          </Grid>
          <Grid item xs={4}>
            <SvgButton svg={CvSvg} />
          </Grid>
          <Grid item xs={4}>
            <SvgButton svg={CvSvg} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            orice
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default DashboardPage;
