import React from 'react';
import { Box } from '@material-ui/core';
import { BoxProps } from '@material-ui/core';

interface PreviewCvProps extends BoxProps {}

const PreviewCv = ({ ...rest }: PreviewCvProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" {...rest}>
      content
    </Box>
  );
};

export default PreviewCv;
