import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import ExperienceInput from '../../components/FormInputs/FormikExperienceInput';

interface ExperienceStepProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
}

const ExperienceStep = ({ inputName, arrayInputName, ...rest }: ExperienceStepProps) => (
  <Box {...rest}>
    <ExperienceInput inputName={inputName} arrayInputName={arrayInputName} />
  </Box>
);

export default ExperienceStep;
