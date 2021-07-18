import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import useStyles from './style';

interface SubmitButtonProps extends ButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading, children, className, ...rest }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button color="primary" variant="contained" className={classes.submit} {...rest}>
          {children}
        </Button>
      )}
    </div>
  );
};

export default SubmitButton;
