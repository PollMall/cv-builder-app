import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import ProjectInput from '../../components/FormInputs/FormikProjectInput';

interface ProjectStepProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
}

const ProjectStep = ({ inputName, arrayInputName, ...rest }: ProjectStepProps) => (
  <Box {...rest}>
    <ProjectInput inputName={inputName} arrayInputName={arrayInputName} />
  </Box>
);

export default ProjectStep;
