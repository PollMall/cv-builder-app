import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import ChipInput from '../../components/FormInputs/FormikChipInput';

interface ChipStepProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
  ChipBoxProps?: BoxProps;
}

const ChipStep = ({ inputName, arrayInputName, ChipBoxProps, ...rest }: ChipStepProps) => (
  <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
    <ChipInput inputName={inputName} arrayInputName={arrayInputName} ChipBoxProps={ChipBoxProps} {...rest} />
  </Box>
);

ChipStep.defaultProps = {
  ChipBoxProps: undefined,
};

export default ChipStep;
