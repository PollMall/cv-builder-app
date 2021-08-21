import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Cv } from '../../types';
import useStyles from './styles';
import PieChart from '../../components/PieChart/PieChart';
import PreviewCv from '../../components/PreviewCv/PreviewCv';
import { useQuery } from '@apollo/client';
import { GET_PDF } from './api';

interface BestCvPreviewProps {
  cv: Cv;
}

const BestCvPreview = ({ cv }: BestCvPreviewProps) => {
  const classes = useStyles();
  const { data: dataPDF } = useQuery(GET_PDF, { variables: { cv: JSON.stringify(cv), template: cv.template } });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box display="flex" justifyContent="space-evenly" alignItems="center" className={classes.stats}>
        <Typography variant="h6" className={classes.statsText}>
          Your best score
        </Typography>
        <PieChart value={cv.score} className={classes.chart} />
      </Box>
      <PreviewCv className={classes.cvPreview} base64={dataPDF?.getPDF} scale={0.45}>
        preview
      </PreviewCv>
      <Typography variant="subtitle1">{cv.title}</Typography>
    </Box>
  );
};

export default BestCvPreview;
