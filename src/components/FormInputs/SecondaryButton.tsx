import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import useStyles from './style';

interface SecondaryButtonProps extends ButtonProps {
  loading?: boolean;
}

const SecondaryButton = ({ loading, children, className, ...rest }: SecondaryButtonProps) => {
  const classes = useStyles();

  return (
    <div className={className}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button color="secondary" variant="contained" className={classes.secondaryBtn} {...rest}>
          {children}
        </Button>
      )}
    </div>
  );
};

SecondaryButton.defaultProps = {
  loading: undefined,
};

export default SecondaryButton;
