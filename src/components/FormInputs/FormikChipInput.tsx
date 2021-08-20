import React from 'react';
import { useField } from 'formik';
import { Chip, Box, BoxProps } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../components/FormInputs/FormikInput';
import useStyles from './style';

interface FormikChipInputProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
  title: string;
  ChipBoxProps?: BoxProps;
}

const FormikChipInput = ({ inputName, arrayInputName, ChipBoxProps, ...rest }: FormikChipInputProps) => {
  const [arrayField, , arrayHelpers] = useField(arrayInputName);
  const [field, , helper] = useField(inputName);
  const classes = useStyles();

  const handleAdd = () => {
    arrayHelpers.setValue(arrayField.value.concat(field.value));
    helper.setValue('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="" width="100%" {...rest}>
      <Input
        name={inputName}
        endIcon={<AddIcon color="primary" />}
        onClickEndIcon={handleAdd}
        disabledEndIcon={!field.value}
      />
      <Box className={classes.overflowContent} maxHeight={150} {...ChipBoxProps}>
        {arrayField.value?.map((val: string) => (
          <Chip
            key={val}
            style={{ alignSelf: 'flex-start', marginBottom: 8 }}
            label={val}
            variant="outlined"
            onDelete={() => arrayHelpers.setValue(arrayField.value.filter((el: string) => el !== val))}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FormikChipInput;
