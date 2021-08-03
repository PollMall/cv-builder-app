import React from 'react';
import { useField } from 'formik';
import { TextField, StandardTextFieldProps } from '@material-ui/core';
import useStyles from './style';

interface InputProps extends StandardTextFieldProps {
  name: string;
}

const Input = ({ name, ...rest }: InputProps) => {
  const [field, meta] = useField(name);
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      className={classes.root}
      InputProps={{ className: classes.input }}
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...rest}
    />
  );
};

export default Input;
