import React from 'react';
import ExperienceInput from '../../components/FormInputs/FormikExperienceInput';

interface ExperienceStepProps {
  inputName: string;
  arrayInputName: string;
}

const ExperienceStep = ({ inputName, arrayInputName }: ExperienceStepProps) => (
  <ExperienceInput inputName={inputName} arrayInputName={arrayInputName} />
);

export default ExperienceStep;
