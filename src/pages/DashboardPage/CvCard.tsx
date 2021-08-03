import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CvSvg from '../../images/CvSvg';
import useStyles from './styles';

const CvCard = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <CvSvg className={classes.card} />
      <Typography variant="caption">some title</Typography>
    </Box>
  );
};

export default CvCard;
