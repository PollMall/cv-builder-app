import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import SubmitButton from '../../../components/FormInputs/SubmitButton';
import SecondaryButton from '../../../components/FormInputs/SecondaryButton';

interface FormStepProps {
  step: number;
  maxSteps: number;
  children: ReactNode;
  onBack: () => void;
}

const FormStep = ({ step, maxSteps, children, onBack }: FormStepProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {children}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        justifySelf="flex-end"
        style={{ border: '1px solid red' }}
      >
        {step !== 1 && <SecondaryButton onClick={onBack}>back</SecondaryButton>}
        <SubmitButton variant="contained" color="primary" type="submit">
          {step === maxSteps ? 'save' : 'next'}
        </SubmitButton>
      </Box>
    </Box>
  );
};

export default FormStep;
