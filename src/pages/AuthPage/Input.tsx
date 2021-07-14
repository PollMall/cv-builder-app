import React from 'react';
import { useField } from 'formik';
import { TextField, StandardTextFieldProps } from '@material-ui/core';

interface InputProps extends StandardTextFieldProps {
  name: string;
}

const Input = ({ name, ...rest }: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <TextField error={!!(meta.touched && meta.error)} helperText={meta.touched && meta.error} {...field} {...rest} />
  );
};

export default Input;
