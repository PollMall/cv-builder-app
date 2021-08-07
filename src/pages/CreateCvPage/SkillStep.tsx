import React from 'react';
import { useField } from 'formik';
import { Chip, Box, Typography, BoxProps } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../components/FormInputs/FormikInput';
import useStyles from './styles';
import RecommendSkills from './RecommendSkills';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { useQuery } from '@apollo/client';
import { GET_SKILLS } from './api';
import { HardSkill, SoftSkill } from '../../context/AuthContext/types';

interface SkillStepProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
  title: string;
  ChipBoxProps?: BoxProps;
}

const SkillStep = ({ inputName, arrayInputName, title, ChipBoxProps, ...rest }: SkillStepProps) => {
  const [arrayField, , arrayHelpers] = useField(arrayInputName);
  const [field, , helper] = useField(inputName);
  const [fieldOfWorkField] = useField('field');
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_SKILLS, {
    variables: { field: fieldOfWorkField.value, typeOfSkills: arrayInputName },
  });

  const handleAdd = () => {
    arrayHelpers.setValue(arrayField.value.concat(field.value));
    helper.setValue('');
  };

  const flatSkillsArray = (skills: HardSkill[] | SoftSkill[]) => skills?.map((s) => s.name);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="" width="100%">
        <Box display="flex" alignItems="flex-start">
          <Autocomplete
            id={inputName}
            size="small"
            fullWidth
            noOptionsText="No skills"
            options={flatSkillsArray(data.skills)}
            value={field.value ? field.value : null}
            onInputChange={(event, value) => {
              value === null ? helper.setValue('') : helper.setValue(value);
            }}
            filterOptions={(options) =>
              options.filter(
                (o) =>
                  !arrayField.value.find((el: string) => el.toLowerCase() === o.toLowerCase()) &&
                  o.toLowerCase().includes(field.value.toLowerCase()),
              )
            }
            ListboxProps={{ style: { backgroundColor: '#6476c94d' } }}
            getOptionSelected={() => true}
            renderInput={(props: AutocompleteRenderInputParams) => (
              <Input
                {...props}
                id={inputName}
                name={inputName}
                endIcon={<AddIcon color="primary" />}
                onClickEndIcon={handleAdd}
                disabledEndIcon={!field.value}
              />
            )}
          />
          <RecommendSkills fieldOfWork={fieldOfWorkField.value} typeOfSkill={arrayInputName} />
        </Box>
        <Box className={classes.overflowContent} maxHeight={150} {...ChipBoxProps}>
          {arrayField.value?.map((val: string) => (
            <Chip
              key={val}
              label={val}
              variant="outlined"
              onDelete={() => arrayHelpers.setValue(arrayField.value.filter((el: string) => el !== val))}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SkillStep.defaultProps = {
  ChipBoxProps: undefined,
};

export default SkillStep;
