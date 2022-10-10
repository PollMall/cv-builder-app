import React from 'react';
import { useField } from 'formik';
import { Box, Button } from '@material-ui/core';
import Input from './FormikInput';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types';

interface FormikProjectInputProps {
  inputName: string;
  arrayInputName: string;
}

const FormikProjectInput = ({ inputName, arrayInputName }: FormikProjectInputProps) => {
  const classes = useStyles();
  const [inputField, inputMeta, inputHelper] = useField(inputName);
  const [arrayInputField, , arrayInputHelper] = useField(arrayInputName);

  const handleAdd = () => {
    arrayInputHelper.setValue(arrayInputField.value.concat(inputField.value));
    inputHelper.setValue(inputMeta.initialValue);
  };

  const handleDelete = (project: Project) => {
    arrayInputHelper.setValue(
      arrayInputField.value?.filter((el: Project) => JSON.stringify(el) !== JSON.stringify(project)),
    );
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" width="45%">
        <Input name={`${inputName}.name`} placeholder="Name" />
        <Input name={`${inputName}.title`} placeholder="Title" />
        <Input name={`${inputName}.description`} multiline minRows={8} maxRows={8} placeholder="Description" />
        <Button className={classes.addBtn} startIcon={<AddIcon />} onClick={handleAdd}>
          add
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-start" className={classes.cardsContainer}>
        {arrayInputField.value.map((exp: Project, idx: number) => (
          <ProjectCard
            key={idx}
            {...exp}
            raised={false}
            className={classes.roundedCard}
            onDelete={() => handleDelete(exp)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FormikProjectInput;
