import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainAppBar from "components/MainAppBar";
import Game from "components/Game";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

function Page(props) {
  const { classes } = props;

  return (
    <div>
      <MainAppBar />
      <main>
        <Grid container className={classes.root} direction="row" alignItems="stretch">
          <Grid item xs>
            <Game />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default withStyles(styles)(Page);
