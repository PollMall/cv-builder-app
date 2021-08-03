import React from 'react';
import { AppBar, Box } from '@material-ui/core';
import useStyles from './styles';
import { LogoSvg } from '../../images';
import Dropdown from './Dropdown';

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={1} className={classes.root} position="fixed">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <LogoSvg className={classes.logo} />
        <Dropdown />
      </Box>
    </AppBar>
  );
};

export default NavBar;
