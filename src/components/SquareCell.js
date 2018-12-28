import React from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    margin: 2,
    height: 64,
    width: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function SquareCell(props) {
  const { classes } = props;
  const variant = props.highlight ? "contained" : "outlined" ;
  const color = {
    "": "default",
    "X": "primary",
    "O": "secondary"
  }[props.value]
  return (
    <Button
      className={classes.button}
      variant={variant}
      color={color}
      onClick={props.onClick}
    >
      <span>{props.value}</span>
    </Button>
  );
}

export default withStyles(styles)(SquareCell);
