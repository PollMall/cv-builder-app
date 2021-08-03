import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import AddCvSvg from '../../images/AddCvSvg';
import useStyles from './styles';

const AddCvBtn = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button>
        <AddCvSvg className={classes.card} />
      </Button>
      <Typography variant="caption">some title</Typography>
    </Box>
  );
};

export default AddCvBtn;
