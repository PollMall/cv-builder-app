import React, { FC, SVGProps } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

interface SvgButtonProps {
  svg: FC<SVGProps<SVGSVGElement>>;
}

const SvgButton = ({ svg: Svg }: SvgButtonProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button className={classes.button}>
        <Svg className={classes.card} />
      </Button>
      <Typography variant="caption">some title</Typography>
    </Box>
  );
};

export default SvgButton;
