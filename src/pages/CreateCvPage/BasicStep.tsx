import React, { ReactNode } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';

interface BasicStepProps extends BoxProps {
  title: string;
  children: ReactNode;
}

const BasicStep = ({ title, children, ...rest }: BasicStepProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="100%" {...rest}>
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" alignItems="center" width="100%" height="100%">
        {children}
      </Box>
    </Box>
  );
};

BasicStep.defaultProps = {
  multiline: undefined,
  rows: undefined,
};

export default BasicStep;
