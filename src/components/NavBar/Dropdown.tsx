import React, { useState, MouseEvent, useContext } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from './styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext, AuthActions } from '../../context/AuthContext';
import { SIGN_OUT } from './api';
import { useMutation } from '@apollo/client';

const Dropdown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state as any;
  const [signOut, { loading, error }] = useMutation(SIGN_OUT);

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const handleSignOut = async () => {
    try {
      await signOut({ variables: { uid: user?.uid } });
      dispatch({ type: AuthActions.UPDATE_USER, payload: undefined });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <PersonOutlineIcon fontSize="large" color="primary" />
      </IconButton>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ className: classes.dropdown }}
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        {loading ? (
          <CircularProgress className={classes.loading} />
        ) : (
          <div>
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </div>
        )}
      </Menu>
      <Snackbar open={!!error} autoHideDuration={5000} onClose={() => dispatch({ type: AuthActions.CLEAR_STATE })}>
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </>
  );
};

export default Dropdown;
