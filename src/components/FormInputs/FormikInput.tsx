import React, { ReactNode, MouseEventHandler } from 'react';
import { useField } from 'formik';
import { TextField, StandardTextFieldProps, IconButton } from '@material-ui/core';
import useStyles from './style';

export type FormikInputProps = StandardTextFieldProps & {
  name: string;
  endIcon?: ReactNode;
  onClickEndIcon?: MouseEventHandler;
  disabledEndIcon?: boolean;
};

const FormikInput = ({ name, endIcon, onClickEndIcon, disabledEndIcon, ...rest }: FormikInputProps) => {
  const [field, meta] = useField(name);
  const classes = useStyles();
  const { InputProps: restInputProps, ...restProps } = rest;

  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      className={classes.root}
      InputProps={{
        ...restInputProps,
        className: classes.input,
        endAdornment: endIcon && (
          <IconButton disabled={disabledEndIcon} size="small" onClick={onClickEndIcon}>
            {endIcon}
          </IconButton>
        ),
      }}
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...restProps}
    />
  );
};

FormikInput.defaultProps = {
  endIcon: undefined,
  onClickEndIcon: undefined,
  disabledEndIcon: undefined,
};

export default FormikInput;
