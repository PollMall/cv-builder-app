import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Button } from '@material-ui/core';
import Page from '../../components/Page/Page';
import CvSvg from '../../images/CvSvg';
import AddCvSvg from '../../images/AddCvSvg';
import SvgButton from './SvgButton';
import { useQuery } from '@apollo/client';
import { GET_BEST_CVS } from './api';
import { AuthContext } from '../../context/AuthContext';
import { Cv } from '../../context/AuthContext/types';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import useStyles from './styles';
import BestCvPreview from './BestCvPreview';

const DashboardPage = () => {
  const { state } = useContext(AuthContext);
  const { data, loading, error } = useQuery(GET_BEST_CVS, { variables: { uid: state.user?.uid, noOfCvs: 4 } });
  const { push } = useHistory();
  const classes = useStyles();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error!</h2>;
  }

  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <Box display="flex" justifyContent="space-around" width="90vw">
        <Grid container spacing={4} alignItems="center">
          <Grid item sm={12} md={6} lg={4}>
            <SvgButton svg={AddCvSvg} title="Create new" onClick={() => push('/cv/new')} />
          </Grid>
          {data.bestCvs.map((cv: Cv) => (
            <Grid key={cv.id} item sm={12} md={6} lg={4}>
              <SvgButton svg={CvSvg} title={cv.title} onClick={() => push(`/cv?id=${cv.id}`)} />
            </Grid>
          ))}
          <Grid item sm={12} md={6} lg={4} className={classes.gridText}>
            <Button className={classes.btn} color="primary" onClick={() => push('/cv')} endIcon={<ArrowRightAltIcon />}>
              see all
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <BestCvPreview cv={data.bestCvs[0]} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default DashboardPage;
