import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import SubmitButton from '../../components/FormInputs/SubmitButton';
import SecondaryButton from '../../components/FormInputs/SecondaryButton';

type FormStepProps = {
  title: string;
  step: number;
  maxSteps: number;
  children: ReactNode;
  onBack: () => void;
};

const FormStep = ({ title, step, maxSteps, children, onBack }: FormStepProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minHeight={380}
      width="100%"
    >
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Box height="100%" width="100%">
        {children}
      </Box>
      <Box display="flex" justifyContent="space-evenly" width="80%">
        {step !== 1 && <SecondaryButton onClick={onBack}>back</SecondaryButton>}
        <SubmitButton variant="contained" color="primary" type="submit">
          {step === maxSteps ? 'save' : 'next'}
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default FormStep;
