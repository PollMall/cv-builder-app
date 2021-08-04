import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Cv } from '../../context/AuthContext/types';
import useStyles from './styles';
import PieChart from '../../components/PieChart/PieChart';

interface BestCvPreviewProps {
  cv: Cv;
}

const BestCvPreview = ({ cv }: BestCvPreviewProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box display="flex" justifyContent="space-evenly" alignItems="center" className={classes.stats}>
        <Typography variant="h6" className={classes.statsText}>
          Your best score
        </Typography>
        <PieChart value={cv.score} className={classes.chart} />
      </Box>
      <div className={classes.cvPreview}>preview</div>
      <Typography variant="subtitle1">{cv.title}</Typography>
    </Box>
  );
};

export default BestCvPreview;
