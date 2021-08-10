import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Cv } from '../../types';
import useStyles from './styles';
import PieChart from '../../components/PieChart/PieChart';
import PreviewCv from '../../components/PreviewCv/PreviewCv';

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
      <PreviewCv className={classes.cvPreview}>preview</PreviewCv>
      <Typography variant="subtitle1">{cv.title}</Typography>
    </Box>
  );
};

export default BestCvPreview;
