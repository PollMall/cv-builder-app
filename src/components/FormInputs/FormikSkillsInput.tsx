import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { Chip, Box, Typography, BoxProps, Slider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from './FormikInput';
import useStyles from './style';
import RecommendSkills from './RecommendSkills';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { useQuery } from '@apollo/client';
import { GET_SKILLS } from './api';
import type { Skill } from '../../types';

interface FormikSkillsInputProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
  ChipBoxProps?: BoxProps;
}

const FormikSkillsInput = ({ inputName, arrayInputName, ChipBoxProps, ...rest }: FormikSkillsInputProps) => {
  const [arrayField, , arrayHelpers] = useField(arrayInputName);
  const [field, meta, helper] = useField(inputName);
  const [fieldOfWorkField] = useField('field');
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_SKILLS, {
    variables: { field: fieldOfWorkField.value, typeOfSkills: arrayInputName },
    fetchPolicy: 'cache-and-network',
  });

  const handleAdd = () => {
    arrayHelpers.setValue(arrayField.value.concat(field.value));
    helper.setValue(meta.initialValue);
  };

  const handleChangeRating = (event: ChangeEvent<{}>, newValue: number | number[]) => {
    helper.setValue({ ...field.value, rating: newValue });
  };

  if (loading) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }
  if (error) {
    console.error(error);
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" {...rest}>
      <Box display="flex" alignItems="flex-start">
        <Autocomplete
          id={inputName}
          size="small"
          fullWidth
          noOptionsText="No skills"
          options={data.skills}
          value={field.value ? field.value : null}
          onInputChange={(event, value) => {
            !value ? helper.setValue(meta.initialValue) : helper.setValue({ ...field.value, name: value });
          }}
          getOptionLabel={(option) => option.name}
          filterOptions={(options) => {
            return options.filter(
              (o) =>
                !arrayField.value.find((el: Skill) => el.name.toLowerCase() === o.name.toLowerCase()) &&
                o.name.toLowerCase().includes(field.value.name.toLowerCase()),
            );
          }}
          ListboxProps={{ style: { backgroundColor: '#596dc9' } }}
          getOptionSelected={() => false}
          renderInput={(props: AutocompleteRenderInputParams) => (
            <Input
              {...props}
              id={`${inputName}.name`}
              name={`${inputName}.name`}
              endIcon={<AddIcon color="primary" />}
              onClickEndIcon={handleAdd}
              disabledEndIcon={!field.value}
            />
          )}
        />
        <RecommendSkills fieldOfWork={fieldOfWorkField.value} typeOfSkill={arrayInputName} />
      </Box>

      {console.log(arrayField.value[0].kind)}

      {arrayField.value[0].kind === 'hardSkill' && (
        <Box display="flex" alignItems="center" className={classes.ratingSection}>
          {console.log('should be true')}
          <Typography className={classes.ratingText}>Points</Typography>
          <Slider
            id={`${inputName}.rating`}
            onChange={handleChangeRating}
            value={field.value.rating}
            defaultValue={1}
            valueLabelDisplay="auto"
            min={1}
            max={5}
            className={classes.slider}
          />
        </Box>
      )}
      <Box className={classes.overflowContent} maxHeight={150} {...ChipBoxProps}>
        {arrayField.value?.map((val: Skill) => (
          <Chip
            key={val.name}
            label={val?.kind === 'hardSkill' ? `${val.name} - ${val!.rating}/5` : val.name}
            variant="outlined"
            onDelete={() => arrayHelpers.setValue(arrayField.value.filter((el: Skill) => el.name !== val.name))}
          />
        ))}
      </Box>
    </Box>
  );
};

FormikSkillsInput.defaultProps = {
  ChipBoxProps: undefined,
};

export default FormikSkillsInput;
