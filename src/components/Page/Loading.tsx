import React from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import useStyles from './styles';

interface LoadingProps {
  message?: string;
}

const Loading = ({ message }: LoadingProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography gutterBottom variant="h3">
        {message || 'Loading your page...'}
      </Typography>
      <LinearProgress color="secondary" className={classes.loading} />
    </Box>
  );
};

Loading.defaultProps = {
  message: undefined,
};

export default Loading;
