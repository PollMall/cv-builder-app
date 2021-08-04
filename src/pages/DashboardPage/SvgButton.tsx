import React, { FC, SVGProps, MouseEventHandler } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

interface SvgButtonProps {
  svg: FC<SVGProps<SVGSVGElement>>;
  title: string;
  onClick: MouseEventHandler;
}

const SvgButton = ({ svg: Svg, title, onClick }: SvgButtonProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button variant="contained" className={classes.cardButton} onClick={onClick}>
        <Svg className={classes.card} />
      </Button>
      <Typography variant="subtitle2">{title}</Typography>
    </Box>
  );
};

export default SvgButton;
