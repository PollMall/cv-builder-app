import React from 'react';
import { Box, BoxProps } from '@material-ui/core';
import SkillsInput from '../../components/FormInputs/FormikSkillsInput';

interface SkillStepProps extends BoxProps {
  isRatable?: boolean;
  inputName: string;
  arrayInputName: string;
  ChipBoxProps?: BoxProps;
}

const SkillStep = ({ isRatable, inputName, arrayInputName, ChipBoxProps, ...rest }: SkillStepProps) => (
  <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
    <SkillsInput
      isRatable={isRatable}
      inputName={inputName}
      arrayInputName={arrayInputName}
      ChipBoxProps={ChipBoxProps}
    />
  </Box>
);

SkillStep.defaultProps = {
  ChipBoxProps: undefined,
};

export default SkillStep;
