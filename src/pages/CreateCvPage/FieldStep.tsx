import React from 'react';
import { useField } from 'formik';
import { Box, Typography, BoxProps } from '@material-ui/core';
import Input from '../../components/FormInputs/FormikInput';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { useQuery } from '@apollo/client';
import { GET_FIELDS } from './api';

interface FieldStepProps extends BoxProps {
  inputName: string;
  title: string;
}

const FieldStep = ({ inputName, title, ...rest }: FieldStepProps) => {
  const [field, , helper] = useField(inputName);
  const { data, loading, error } = useQuery(GET_FIELDS);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" height="100%" {...rest}>
      <Typography variant="h5">{title}</Typography>
      <Box display="flex" alignItems="center" width="100%" height="100%">
        <Autocomplete
          id={inputName}
          size="small"
          fullWidth
          noOptionsText="No skills"
          options={data.fields}
          value={field.value ? field.value : null}
          onInputChange={(event, value) => {
            value === null ? helper.setValue('') : helper.setValue(value);
          }}
          filterOptions={(options) => options.filter((o) => o.toLowerCase().includes(field.value.toLowerCase()))}
          ListboxProps={{ style: { backgroundColor: '#596dc9' } }}
          getOptionSelected={() => true}
          renderInput={(props: AutocompleteRenderInputParams) => <Input {...props} id={inputName} name={inputName} />}
        />
      </Box>
    </Box>
  );
};

export default FieldStep;
