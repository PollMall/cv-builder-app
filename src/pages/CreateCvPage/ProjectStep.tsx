import React from 'react';
import ProjectInput from '../../components/FormInputs/FormikProjectInput';

interface ProjectStepProps {
  inputName: string;
  arrayInputName: string;
}

const ProjectStep = ({ inputName, arrayInputName }: ProjectStepProps) => (
  <ProjectInput inputName={inputName} arrayInputName={arrayInputName} />
);

export default ProjectStep;
