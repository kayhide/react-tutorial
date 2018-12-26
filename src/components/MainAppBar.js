import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function MainAppBar(props) {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Tic Tac Toe
        </Typography>
      </Toolbar>
    </AppBar>
  );
}


export default MainAppBar;
