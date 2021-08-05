import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import Input from '../../components/FormInputs/Input';

interface BasicStepProps extends BoxProps {
  inputName: string;
  title: string;
}

const BasicStep = ({ inputName, title, ...rest }: BasicStepProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="100%" {...rest}>
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" alignItems="center" width="100%" height="100%">
        <Input name={inputName} />
      </Box>
    </Box>
  );
};

export default BasicStep;
