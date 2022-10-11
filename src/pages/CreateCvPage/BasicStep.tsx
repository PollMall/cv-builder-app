import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import Input from '../../components/FormInputs/FormikInput';
import type { FormikInputProps } from '../../components/FormInputs/FormikInput';

interface BasicStepProps extends BoxProps {
  inputProps: FormikInputProps;
}

const BasicStep = ({ inputProps, ...rest }: BasicStepProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="100%" {...rest}>
      <Box display="flex" alignItems="center" width="100%" height="100%">
        <Input {...inputProps} />
      </Box>
    </Box>
  );
};

export default BasicStep;
