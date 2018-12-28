import React from "react";

import Grid from '@material-ui/core/Grid';

import Game from "components/Game";

function Page(props) {
  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item xs>
        <Game />
      </Grid>
    </Grid>
  );
};

export default Page;
