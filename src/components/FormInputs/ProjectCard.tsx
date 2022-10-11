import React, { useState, MouseEventHandler } from 'react';
import Card from '../Card/Card';
import { Typography, CardProps, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';

interface ProjectCardProps extends CardProps {
  name: string;
  description?: string;
  title?: string;
  onDelete: MouseEventHandler;
  onEdit: () => void;
}

const showMultilineText = (text: string) =>
  text.split('\n').map((line, idx) => (
    <Typography key={idx} component="p" variant="body2">
      {line}
    </Typography>
  ));

const ProjectCard = ({ name, description, title, onDelete, onEdit, ...rest }: ProjectCardProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const classes = useStyles();

  const handleClickCard = () => {
    onEdit();
    handleOpen();
  };

  const handleOpen = () => {
    setShowDelete(true);
  };

  const handleClose = () => {
    setShowDelete(false);
  };

  return (
    <Card {...rest} onClick={handleClickCard} onMouseOver={handleOpen} onMouseOut={handleClose}>
      <Typography component="span" variant="subtitle1" className={classes.institutionName}>
        {name}
      </Typography>
      {title ? (
        <Typography component="span" variant="subtitle2" className={classes.title}>
          {' '}
          - {title}
        </Typography>
      ) : (
        ''
      )}
      {description && showMultilineText(description)}
      <div hidden={!showDelete} className={classes.deleteBtn}>
        <IconButton onClick={onDelete}>
          <DeleteIcon color="primary" fontSize="small" />
        </IconButton>
      </div>
    </Card>
  );
};

export default ProjectCard;
