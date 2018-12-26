import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    height: 64,
    width: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function SquareCell(props) {
  const { classes } = props;
  const color = props.highlight ? "secondary" : "primary" ;
  return (
    <Button
      variant="outlined"
      className={classes.button}
      color={color}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}

export default withStyles(styles)(SquareCell);
