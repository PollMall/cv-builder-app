import React, { useState, useEffect } from 'react';
import { ApolloError } from '@apollo/client';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface ErrorProps {
  error: Error | ApolloError;
}

const Error = ({ error }: ErrorProps) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
    setShowError(!!error);
  }, [error]);

  const handleHideError = () => {
    setShowError(false);
  };

  return (
    <Snackbar open={showError} onClose={handleHideError} autoHideDuration={5000}>
      <Alert severity="error">{error.message}</Alert>
    </Snackbar>
  );
};

export default Error;
