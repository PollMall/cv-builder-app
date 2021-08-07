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
            options={data.fields}
            value={field.value ? field.value : null}
            onInputChange={(event, value) => {
              value === null ? helper.setValue('') : helper.setValue(value);
            }}
            filterOptions={(options) => options.filter((o) => o.toLowerCase().includes(field.value.toLowerCase()))}
            ListboxProps={{ style: { backgroundColor: '#6476c94d' } }}
            getOptionSelected={() => true}
            renderInput={(props: AutocompleteRenderInputParams) => <Input {...props} id={inputName} name={inputName} />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FieldStep;
