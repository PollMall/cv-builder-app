import React, { useState } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from './styles';
import EditIcon from '@material-ui/icons/Edit';

interface SimpleFieldEditProps extends BoxProps {
  title: string;
  info?: string | string[];
}

const SimpleFieldEdit = ({ title, info, ...rest }: SimpleFieldEditProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const classes = useStyles({ showEdit });

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  return (
    <Box {...rest} onMouseOver={handleEnterHover} onMouseOut={handleExitHover} className={classes.root}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {showEdit && <EditIcon color="secondary" fontSize="small" />}
      </Box>
      {typeof info === 'string' ? (
        <Typography variant="subtitle1" className={classes.fieldInfo}>
          {info}
        </Typography>
      ) : (
        info?.map((i) => (
          <Typography key={i} variant="subtitle1" className={classes.fieldInfo}>
            • {i}
          </Typography>
        ))
      )}
    </Box>
  );
};

SimpleFieldEdit.defaultProps = {
  info: undefined,
};

export default SimpleFieldEdit;
